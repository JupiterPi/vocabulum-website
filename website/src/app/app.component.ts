import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivationEnd, NavigationEnd} from "@angular/router";
import {filter} from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import {WindowService} from "./window.service";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    {
      route: "/",
      title: "Startseite",
      selected: false
    }/*,
    {
      route: "/imprint",
      title: "Impressum",
      selected: false
    }*/
  ];

  floored = false;

  @ViewChild("filler") filler!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private windowService: WindowService, private cookieService: CookieService, private http: HttpClient) {
    router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe(event => {
      const urls = (event as ActivationEnd).snapshot.url;
      let paths = [];
      for (let url of urls) {
        paths.push(url.path);
      }
      const url = "/" + paths.join("/");
      this.pages.reverse();
      for (let i in this.pages) {
        let page = this.pages[i];
        this.pages[i].selected = page.route === url;
      }
      this.pages.reverse();
    });

    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(e => this.onPageChanged(e as NavigationEnd));
  }

  onPageChanged(e: NavigationEnd) {
    // analyze traffic
    let id = this.cookieService.get("client-id");
    console.log(id);
    if (id == "") {
      id = uuid();
      this.cookieService.set("client-id", id);
    }
    this.http.post("/api/analyze/view/" + id, null).subscribe({
      next: val => console.log(val)
    });

    // updateFloored
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      console.log(this.filler);
      const fillerTop = this.filler.nativeElement.getBoundingClientRect().top;
      console.log("updated - viewportHeight: " + viewportHeight + ", fillerTop: " + fillerTop);
      this.floored = fillerTop < viewportHeight;
    }, 100);
  }
}

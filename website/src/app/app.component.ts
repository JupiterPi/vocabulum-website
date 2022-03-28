import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivationEnd, NavigationEnd} from "@angular/router";
import {filter} from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import {WindowService} from "./window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    {
      route: "/",
      title: "Home",
      selected: false
    },
    {
      route: "/imprint",
      title: "Imprint",
      selected: false
    }
  ];

  floored = false;

  @ViewChild("filler") filler!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private windowService: WindowService) {
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

    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.updateFloored);
  }

  updateFloored = () => {
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      console.log(this.filler);
      const fillerTop = this.filler.nativeElement.getBoundingClientRect().top;
      console.log("updated - viewportHeight: " + viewportHeight + ", fillerTop: " + fillerTop);
      this.floored = fillerTop < viewportHeight;
    }, 100);
  }
}

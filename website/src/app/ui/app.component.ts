import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivationEnd, NavigationEnd, Router} from "@angular/router";
import {filter} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

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
    },
    {
      route: "/imprint",
      title: "Impressum",
      selected: false
    }
  ];

  floored = false;

  @ViewChild("filler") filler!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private http: HttpClient) {
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

  onPageChanged(_: NavigationEnd) {
    // updateFloored
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      const fillerTop = this.filler.nativeElement.getBoundingClientRect().top;
      this.floored = fillerTop < viewportHeight;
    }, 100);
  }
}

import { Component } from '@angular/core';
import {Router, ActivationEnd} from "@angular/router";
import {filter} from 'rxjs/operators';

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

  constructor(private router: Router) {
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
  }
}

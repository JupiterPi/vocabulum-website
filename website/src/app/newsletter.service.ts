import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

export interface NewsletterEmail {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  subscribeEmail(email: NewsletterEmail) {
    return this.http.post<string>(environment.api + "/newsletter", email);
  }

  getEmailInfo(id: string) {
    return this.http.get<NewsletterEmail>(environment.api + "/newsletter/" + id);
  }

  unsubscribeEmail(id: string) {
    return this.http.delete<void>(environment.api + "/newsletter/" + id);
  }
}

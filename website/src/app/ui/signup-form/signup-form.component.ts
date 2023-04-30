import { Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NewsletterService} from "../../newsletter.service";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  isDone = false;

  email = new FormControl("", Validators.email);

  constructor(private snackbar: MatSnackBar, private newsletterService: NewsletterService) {}

  getErrorMessage() {
    if (this.email.hasError("email")) {
      return "Ungültige E-Mail";
    }
    return "";
  }

  signup() {
    if (this.email.value !== "" && !this.email.hasError("email")) {
      this.newsletterService.subscribeEmail({
        email: this.email.value
      }).subscribe(id => {
        console.log(id);
        this.email.setValue("");
        this.snackbar.open("Newsletter erfolgreich abonniert.", "", {
          duration: 3 * 1000
        });
      });
    }
  }
}

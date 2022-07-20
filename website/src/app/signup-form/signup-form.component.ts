import { Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  isDone = false;

  email = new FormControl("", Validators.email);

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  getErrorMessage() {
    if (this.email.hasError("email")) {
      return "Ungültige E-Mail";
    }
    return "";
  }

  signup() {
    if (this.email.value !== "" && !this.email.hasError("email")) {
      this.http.post("/api/newsletter", {
        email: this.email.value
      }, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        this.email.setValue("");
        let message = "";
        const body = response as {message: string};
        if (body.message !== "") {
          message = body.message;
        } else {
          message = "Newsletter erfolgreich abonniert.";
          this.isDone = true;
        }
        this.snackbar.open(message,"", {
          duration: 3 * 1000
        });
      }, (error: Error) => {
        this.snackbar.open("Fehler: \"" + error.message + "\". Versuche es erneut", "", {
          duration: 5 * 1000,
          panelClass: "error"
        });
      });
    }
  }
}

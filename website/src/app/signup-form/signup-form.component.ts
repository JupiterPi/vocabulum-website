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
  email = new FormControl("", Validators.email)

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}

  getErrorMessage() {
    if (this.email.hasError("email")) {
      return "Not a valid email";
    }
    return "";
  }

  signup() {
    if (this.email.value !== "" && !this.email.hasError("email")) {
      this.http.post("/api/signupNewsletter", {
        email: this.email.value
      }, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        this.email.setValue("");
        let message = "Signed up for the newsletter!";
        const body = response as {message: string};
        if (body.message !== "") {
          message += " (" + body.message + ")";
        }
        this._snackBar.open(message,"", {
          duration: 3 * 1000
        });
      }, (error: Error) => {
        this._snackBar.open("Error: \"" + error.message + "\". Try again", "", {
          duration: 5 * 1000,
          panelClass: "error"
        });
      });
    }
  }
}

import { Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  email = new FormControl("", Validators.email)

  constructor(private _snackBar: MatSnackBar) {}

  getErrorMessage() {
    if (this.email.hasError("email")) {
      return "Not a valid email";
    }
    return "";
  }

  signup() {
    if (this.email.value !== "" && !this.email.hasError("email")) {
      // perform signup
      this.email.setValue("");
      this._snackBar.open("Signed up for the newsletter!","", {
        duration: 3 * 1000
      });
    }
  }
}

import {Component, Inject} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-unsubscribe-dialog',
  templateUrl: './unsubscribe-dialog.component.html',
  styleUrls: ['./unsubscribe-dialog.component.css']
})
export class UnsubscribeDialogComponent {
  id?: string;
  email = {
    email: "..."
  }

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const emailId = this.route.snapshot.queryParamMap.get("email");
    if (emailId == null) {
      alert("Vocabulum couldn't read the email you want to unsubscribe from!");
    } else {

      this.id = emailId;
      this.http.get<{email: string}>(environment.api + "/newsletter/" + emailId).subscribe((info) => {
        this.email = info;
      });

    }
  }

  unsubscribe() {
    this.http.delete(environment.api + "/newsletter/" + this.id).subscribe(data => {
      const dialog = this.dialog.open(UnsubscribeDialogSuccessDialog, {
        data: {message: "Abo erfolgreich beendet."}
      });
      dialog.afterClosed().subscribe(() => {
        this.router.navigate(["/"]);
      });
    });
  }

}

@Component({
  selector: "unsubscribe-dialog-success-dialog",
  templateUrl: "./unsubscribe-dialog-success-dialog.html"
})
export class UnsubscribeDialogSuccessDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public message: string) {}
}

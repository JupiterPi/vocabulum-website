import {Component, Inject} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-unsubscribe-dialog',
  templateUrl: './unsubscribe-dialog.component.html',
  styleUrls: ['./unsubscribe-dialog.component.css']
})
export class UnsubscribeDialogComponent {
  email = {
    id: "",
    email: "..."
  }

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const emailId = this.route.snapshot.queryParamMap.get("email");
    if (emailId == null) {
      alert("Vocabulum couldn't read the email you want to unsubscribe from!");
    } else {

      this.email.id = emailId;
      this.http.get("/api/newsletter/" + emailId).subscribe((details) => {
        const emailNewsletter = details as { _id: string, email: string };
        this.email = {
          id: emailNewsletter._id,
          email: emailNewsletter.email
        };
      });

    }
  }

  unsubscribe() {
    this.http.delete("/api/newsletter/" + this.email.id).subscribe(data => {
      const message = (data as { message: string }).message;
      const dialog = this.dialog.open(UnsubscribeDialogSuccessDialog, {
        data: message
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

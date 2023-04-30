import {Component, Inject} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsletterService} from "../../newsletter.service";

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

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private newsletterService: NewsletterService) { }

  ngOnInit() {
    const emailId = this.route.snapshot.queryParamMap.get("email");
    if (emailId == null) {
      alert("Vocabulum couldn't read the email you want to unsubscribe from!");
    } else {

      this.id = emailId;

      this.newsletterService.getEmailInfo(emailId).subscribe(email => {
        if (email != null) this.email = email;
        else alert("Ungültiger Link");
      });

    }
  }

  unsubscribe() {
    if (!this.id) return;
    this.newsletterService.unsubscribeEmail(this.id).subscribe(() => {
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

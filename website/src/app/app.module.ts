import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './ui/app.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from "@angular/material/slider";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SignupFormComponent } from './ui/signup-form/signup-form.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PromotionPageComponent } from './ui/promotion-page/promotion-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { ImprintComponent } from './ui/imprint/imprint.component';
import {HttpClientModule} from "@angular/common/http";
import {
  UnsubscribeDialogComponent,
  UnsubscribeDialogSuccessDialog
} from './ui/unsubscribe-dialog/unsubscribe-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BottomBarComponent } from './ui/bottom-bar/bottom-bar.component';
import {WindowService} from "./window.service";
import { SocialsComponent } from './ui/socials/socials.component';
import {CookieService} from "ngx-cookie-service";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PromotionPageComponent,
    ImprintComponent,
    UnsubscribeDialogComponent,
    UnsubscribeDialogSuccessDialog,
    BottomBarComponent,
    SocialsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: "", component: PromotionPageComponent},
            {path: "imprint", component: ImprintComponent},
            {path: "unsubscribe", component: UnsubscribeDialogComponent}
        ]),
        BrowserAnimationsModule,
        MatSliderModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        MatDialogModule,
        MatRippleModule
    ],
  providers: [
    WindowService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons-outlined');
  }
}

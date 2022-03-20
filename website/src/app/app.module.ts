import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
import { SignupFormComponent } from './signup-form/signup-form.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PromotionPageComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: PromotionPageComponent},
      {path: "imprint", component: ImprintComponent}
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons-outlined');
  }
}

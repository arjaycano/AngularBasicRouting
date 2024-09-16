import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {config} from "rxjs";
import {SignupComponent} from "./components/signup/signup.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'landing-page', component: LandingPageComponent},
]



@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    LandingPageComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule {}

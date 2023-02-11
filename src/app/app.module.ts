import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {  HtmlComponent } from './html/html.component';
import {  PhpComponent } from './php/php.component';
import { CssComponent } from './css/css.component';
import { HtmlhomeComponent } from './html/htmlhome/htmlhome.component';
import { HtmlintroductionComponent } from './html/htmlintroduction/htmlintroduction.component';
import { HtmleditorsComponent } from './html/htmleditors/htmleditors.component';
import { HtmlbasicexamplesComponent } from './html/htmlbasicexamples/htmlbasicexamples.component';
import { HtmlelementsComponent } from './html/htmlelements/htmlelements.component';
import { HtmlattributesComponent } from './html/htmlattributes/htmlattributes.component';
import { HtmlheadingsComponent } from './html/htmlheadings/htmlheadings.component';
import { HtmlparagraphsComponent } from './html/htmlparagraphs/htmlparagraphs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
  CssComponent,
  HtmlComponent,
  PhpComponent,
  HtmlhomeComponent,
  HtmlintroductionComponent,
  HtmleditorsComponent,
  HtmlbasicexamplesComponent,
  HtmlelementsComponent,
  HtmlattributesComponent,
  HtmlheadingsComponent,
  HtmlparagraphsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { HTMLtextformattingComponent } from './html/htmltextformatting/htmltextformatting.component';
import { HTMLlinksComponent } from './html/htmllinks/htmllinks.component';
import { HTMLimagesComponent } from './html/htmlimages/htmlimages.component';
import { HTMLtablesComponent } from './html/htmltables/htmltables.component';
import { HTMLlistComponent } from './html/htmllist/htmllist.component';
import { HTMLclassComponent } from './html/htmlclass/htmlclass.component';
import { HTMLiframeComponent } from './html/htmliframe/htmliframe.component';
import { CSShomeComponent } from './css/csshome/csshome.component';
import { CSSintroComponent } from './css/cssintro/cssintro.component';
import { CSSsyntaxComponent } from './css/csssyntax/csssyntax.component';
import { CSSaddcssComponent } from './css/cssaddcss/cssaddcss.component';
import { CSScolorsComponent } from './css/csscolors/csscolors.component';
import { CSSbackgroundComponent } from './css/cssbackground/cssbackground.component';
import { CSSbordersComponent } from './css/cssborders/cssborders.component';
import { CSSmarginsComponent } from './css/cssmargins/cssmargins.component';
import { CSSpaddingComponent } from './css/csspadding/csspadding.component';
import { CSSdimensionComponent } from './css/cssdimension/cssdimension.component';
import { CSStextComponent } from './css/csstext/csstext.component';
import { CSSfontComponent } from './css/cssfont/cssfont.component';
import { CSSlinksComponent } from './css/csslinks/csslinks.component';
import { CSSlistComponent } from './css/csslist/csslist.component';
import { CSStablesComponent } from './css/csstables/csstables.component';
import { CSSlayoutComponent } from './css/csslayout/csslayout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
  HTMLtextformattingComponent,
  HTMLlinksComponent,
  HTMLimagesComponent,
  HTMLtablesComponent,
  HTMLlistComponent,
  HTMLclassComponent,
  HTMLiframeComponent,
  CSShomeComponent,
  CSSintroComponent,
  CSSsyntaxComponent,
  CSSaddcssComponent,
  CSScolorsComponent,
  CSSbackgroundComponent,
  CSSbordersComponent,
  CSSmarginsComponent,
  CSSpaddingComponent,
  CSSdimensionComponent,
  CSStextComponent,
  CSSfontComponent,
  CSSlinksComponent,
  CSSlistComponent,
  CSStablesComponent,
  CSSlayoutComponent,

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
  
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

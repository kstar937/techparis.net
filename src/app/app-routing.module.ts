import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { PhpComponent } from './php/php.component';
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
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard] },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'php', component: PhpComponent},

  {path: 'html/home', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlhomeComponent
    }
  ]},

  {path: 'html/intro', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlintroductionComponent
    }
  ]},

  {path: 'html/editors', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmleditorsComponent
    }
  ]},

  {path: 'html/basics_examples', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlbasicexamplesComponent
    }
  ]},

  {path: 'html/elements', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlelementsComponent
    }
  ]},

  {path: 'html/attributes', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlattributesComponent
    }
  ]},

  {path: 'html/headings', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlheadingsComponent
    }
  ]},

  {path: 'html/paragraphes', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HtmlparagraphsComponent
    }
  ]},

  {path: 'html/formatting', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLtextformattingComponent
    }
  ]},
  {path: 'html/links', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLlinksComponent
    }
  ]},
  {path: 'html/images', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLimagesComponent
    }
  ]},
  {path: 'html/tables', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLtablesComponent
    }
  ]},
  {path: 'html/list', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLlistComponent
    }
  ]},
  {path: 'html/class', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLclassComponent
    }
  ]},
  {path: 'html/iframe', component: HtmlComponent,
  children: [
    {
      path:'',
      component: HTMLiframeComponent
    }
  ]},

  //CSS--------------------------------------------------------------------

  {path: 'css/home', component: CssComponent,
  children: [
    {
      path:'',
      component: CSShomeComponent
    }
  ]},

  {path: 'css/intro', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSintroComponent
    }
  ]},

  {path: 'css/syntax', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSsyntaxComponent
    }
  ]},

  {path: 'css/add_css', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSaddcssComponent
    }
  ]},

  {path: 'css/colors', component: CssComponent,
  children: [
    {
      path:'',
      component: CSScolorsComponent
    }
  ]},

  {path: 'css/background', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSbackgroundComponent
    }
  ]},

  {path: 'css/borders', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSbordersComponent
    }
  ]},

  {path: 'css/margins', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSmarginsComponent
    }
  ]},

  {path: 'css/padding', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSpaddingComponent
    }
  ]},
  {path: 'css/dimension', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSdimensionComponent
    }
  ]},
  {path: 'css/text', component: CssComponent,
  children: [
    {
      path:'',
      component: CSStextComponent
    }
  ]},
  {path: 'css/font', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSfontComponent
    }
  ]},
  {path: 'css/links', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSlinksComponent
    }
  ]},
  {path: 'css/list', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSlistComponent
    }
  ]},
  {path: 'css/tables', component: CssComponent,
  children: [
    {
      path:'',
      component: CSStablesComponent
    }
  ]},
  {path: 'css/layout', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSlayoutComponent
    }
  ]},

  {path: 'css/padding', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSpaddingComponent
    }
  ]},
  {path: 'css/dimension', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSdimensionComponent
    }
  ]},
  {path: 'css/text', component: CssComponent,
  children: [
    {
      path:'',
      component: CSStextComponent
    }
  ]},
  {path: 'css/font', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSfontComponent
    }
  ]},
  {path: 'css/links', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSlinksComponent
    }
  ]},
  {path: 'css/list', component: CssComponent,
  children: [
    {
      path:'',
      component: CSSlistComponent
    }
  ]},
  {path: 'css/tables', component: CssComponent,
  children: [
    {
      path:'',
      component: CSStablesComponent
    }
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

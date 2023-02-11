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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

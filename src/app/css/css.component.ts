import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent {
  constructor(private router:Router){}
  list = [
    {
      number:'1',
      name:"Accueil",
      link:"/css/home",
    },
    {
      number:'2',
      name:"CSS Introduction",
      link:"/css/intro",
    },
    {
      number:'3',
      name:"CSS Syntax",
      link:"/css/syntax",
    },
    {
      number:'4',
      name:"CSS add_css",
      link:"/css/add_css",
    },
    {
      number:'5',
      name:"CSS Colors",
      link:"/css/colors",
    },
    {
      number:'6',
      name:"CSS background", //attribute (<p></p>)
      link:"/css/background",
    },
    {
      number:'7',
      name:"CSS borders",
      link:"/css/borders",
    },
    {
      number:'8',
      name:"CSS margins",
      link:"/css/margins",
    },
    {
      number:'9',
      name:"CSS padding",
      link:"/css/padding",
    },
    {
      number:'10',
      name:"CSS Dimension",
      link:"/css/dimension",
    },
    {
      number:'11',
      name:"CSS text",
      link:"/css/text",
    },
    {
      number:'12',
      name:"CSS font",
      link:"/css/font",
    },
    {
      number:'13',
      name:"CSS links",
      link:"/css/links",
    },
    {
      number:'14',
      name:"CSS list",
      link:"/css/list",
    },
    {
      number:'15',
      name:"CSS tables",
      link:"/css/tables",
    },
    ////
    {
      number:'10',
      name:"CSS layout",
      link:"/css/layout",
    },
    {
      number:'11',
      name:"CSS text",
      link:"/css/text",
    },
    {
      number:'12',
      name:"CSS font",
      link:"/css/font",
    },
    {
      number:'13',
      name:"CSS links",
      link:"/css/links",
    },
    {
      number:'14',
      name:"CSS list",
      link:"/css/list",
    },
    {
      number:'15',
      name:"CSS tables",
      link:"/css/tables",
    },
  ]


}

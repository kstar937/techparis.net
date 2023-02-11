import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent {
  constructor(private router:Router){}
  list = [
    {
      number:'1',
      name:"Accueil",
      link:"/html/home",
    },
    {
      number:'2',
      name:"HTML Introduction",
      link:"/html/intro",
    },
    {
      number:'3',
      name:"HTML Editeurs",
      link:"/html/editors",
    },
    {
      number:'4',
      name:"HTML Exemples Basiques",
      link:"/html/basics_examples",
    },
    {
      number:'5',
      name:"HTML Elements",
      link:"/html/elements",
    },
    {
      number:'6',
      name:"HTML Balises", //attribute (<p></p>)
      link:"/html/attributes",
    },
    {
      number:'7',
      name:"HTML Titres",
      link:"/html/headings",
    },
    {
      number:'8',
      name:"HTML Paragraphes",
      link:"/html/paragraphes",
    },
    {
      number:'9',
      name:"HTML Formats de texte",
      link:"/html/formatting",
    },
    {
      number:'10',
      name:"HTML Liens",
      link:"/html/links",
    },
    {
      number:'11',
      name:"HTML Images",
      link:"/html/images",
    },
    {
      number:'12',
      name:"HTML Tables",
      link:"/html/tables",
    },
    {
      number:'13',
      name:"HTML Liste",
      link:"/html/list",
    },
    {
      number:'14',
      name:"HTML Classes",
      link:"/html/class",
    },
    {
      number:'15',
      name:"HTML Iframe",
      link:"/html/iframe",
    },
  ]


}

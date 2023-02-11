import { Component } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent {

  list = [
    {
      number:'1',
      name:"home",
      link:"/html/home",
    },
    {
      number:'2',
      name:"HTML intro",
      link:"/html/intro",
    },
    {
      number:'3',
      name:"HTML editors",
      link:"/html/editors",
    },
    {
      number:'4',
      name:"HTML basics examples",
      link:"/html/basics_examples",
    },
    {
      number:'5',
      name:"HTML elements",
      link:"/html/elements",
    },
    {
      number:'6',
      name:"HTML attributes",
      link:"/html/attributes",
    },
    {
      number:'7',
      name:"HTML headings",
      link:"/html/headings",
    },
    {
      number:'8',
      name:"HTML paragraphes",
      link:"/html/paragraphes",
    },

  ]


}

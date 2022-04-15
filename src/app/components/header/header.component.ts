import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  switchATUser() {
    const link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("id", "atUser");
    link.setAttribute("href","styles-a11y.css")
    document.head.appendChild(link);
  }
}

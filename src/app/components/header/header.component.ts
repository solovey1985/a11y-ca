import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  isAtUser = false;
  constructor() { }

  ngOnInit() { }
  switchATUser() {
    this.isAtUser = !this.isAtUser;
    const st= document.head.querySelector("#atUser");
    if (st) { 
        console.log(st)
        st.remove();
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "atUser");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", "assets/style-a11y.css")
      document.head.appendChild(link);
    }
  }
}

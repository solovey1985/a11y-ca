import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {

  @ViewChild('firstInput') firstInput: ElementRef;

  param: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params['id']) {
        this.param = params['id'];
      }
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      console.log("Hello ", this.firstInput.nativeElement);
      this.firstInput.nativeElement.focus();
    });
  }

}
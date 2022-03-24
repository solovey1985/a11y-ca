import { Component, OnInit } from '@angular/core';
import { TocModel } from '../../../../models/toc-model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
})
export class ContentComponent implements OnInit {
  constructor() {}
  tocs = TocModel[3];
  ngOnInit() {}

  initTocs() {
    for (let i = 1; i < 4; i++) {
      let model = new TocModel();
      model.DisplayLabel = 'Page ' + i;
      model.Link = '../page/' + i;
      this.tocs.push(model);
    }
  }
}

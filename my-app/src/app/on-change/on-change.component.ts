import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnInit {
  @Input() name = '';
  @Input() age = '';
  constructor() {
    debugger;
  }
  ngOnChanges(changes: any) {
    debugger;
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
    }
  }
  ngOnInit(): void {
    debugger;
    let a = 1;
  }

  // ngDoCheck() {
  //   debugger;
  //   // all the detection will be trigger this
  //   // eg if you click on a field , if you click on the page etc
  // }

}

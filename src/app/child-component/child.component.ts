import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-child',
  template: `<div> Here is the user name: {{ user.name }}</div>`,
})
export class ChildComponent implements OnInit {

// the value that was injected from the parent is : XperTuto
 @Input() user : any ;

  constructor() {
      console.log("[constructor] data from Parent : " + this.user?.name)
  }

  ngOnInit() {
    console.log("[ngOnInit] data from Parent : " + this.user?.name)
  }
}

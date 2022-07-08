import { Component} from '@angular/core';

import { ChildComponent } from './child-component/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
   user = {
    name:"XperTuto"
  }
}

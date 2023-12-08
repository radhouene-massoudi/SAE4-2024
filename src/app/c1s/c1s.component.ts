import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-c1s',
  templateUrl: './c1s.component.html',
  styleUrls: ['./c1s.component.css']
})
export class C1sComponent {
constructor(private s:FirstService){

}
ngOnInit(){
  //this.s.sayHello();
  this.s.addElementToTab();
  this.s.showTab()
}
}

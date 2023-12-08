import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-c2s',
  templateUrl: './c2s.component.html',
  styleUrls: ['./c2s.component.css'],
  providers:[FirstService]
})
export class C2sComponent {
constructor(private s:FirstService){

}
ngOnInit(){
 // this.s.sayHello()
 this.s.showTab();
 this.s.MsgObs()
}
}

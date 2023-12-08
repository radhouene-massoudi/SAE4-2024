import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  tab=['a','b']
  sayHello(){
    alert('hello')
  }
  addElementToTab(){
    this.tab.push('c')
  }
  showTab(){
    console.log(this.tab);
  }
  MsgObs(){
    return new Observable(
      ()=>  {
console.log('obsss')
      }
    )
}
}

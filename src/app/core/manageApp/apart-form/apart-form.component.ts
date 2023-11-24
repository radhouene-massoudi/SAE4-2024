import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apart-form',
  templateUrl: './apart-form.component.html',
  styleUrls: ['./apart-form.component.css']
})
export class ApartFormComponent {

  fg=new FormGroup({
    numap:new FormControl(''),
    FloorNub:new FormControl(''),
    surface:new FormControl(''),
    terrace:new FormControl(''),
    surfaceterrace:new FormControl(''),
    cat:new FormControl(''),
    desc:new FormControl(''),
    residence:new FormControl(''),

  })
  showForm(){
    console.log(this.fg.value)
  }
}

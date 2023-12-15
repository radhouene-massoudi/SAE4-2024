import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppartementService } from '../service/appartement.service';

@Component({
  selector: 'app-apart-form',
  templateUrl: './apart-form.component.html',
  styleUrls: ['./apart-form.component.css']
})
export class ApartFormComponent {

  constructor(private s: AppartementService) {

  }
  fg = new FormGroup({
    appartNum: new FormControl(''),
    floorNum: new FormControl(''),
    surface: new FormControl(''),
    terrace: new FormControl(''),
    surfaceTerrace: new FormControl(''),
    cat: new FormControl(''),
    desc: new FormControl(''),
    residence: new FormControl(''),

  })
  showForm() {
    console.log(this.fg.value)
  }
  saveApp(){
    this.s.addAppartement(this.fg.value).subscribe(
(d)=>{
  alert('added')
},
(err)=>{
  console.log(err)
}


    )
  }
}

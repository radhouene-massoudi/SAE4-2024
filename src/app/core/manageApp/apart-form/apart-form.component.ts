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
    numap: new FormControl('', [Validators.required, Validators.minLength(3)]),
    FloorNub: new FormControl(''),
    surface: new FormControl(''),
    terrace: new FormControl(''),
    surfaceterrace: new FormControl(''),
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

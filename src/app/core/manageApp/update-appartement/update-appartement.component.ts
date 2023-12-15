import { Component } from '@angular/core';
import { AppartementService } from '../service/appartement.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent {
constructor(
  private s:AppartementService,
  private ac:ActivatedRoute,
  private router:Router
  ){

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
ngOnInit(){
  this.s.findAppById(this.ac.snapshot.params['id']).subscribe(
    (d)=>{
this.fg.patchValue(d)
    }
  )
}
update(){
  this.s.updateAppartement(this.fg.value,this.ac.snapshot.params['id']).subscribe(
    ()=>{
this.router.navigate(['listapp'])
    }
  )
}
}

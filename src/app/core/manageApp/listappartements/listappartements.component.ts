import { Component } from '@angular/core';
import { AppartementService } from '../service/appartement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listappartements',
  templateUrl: './listappartements.component.html',
  styleUrls: ['./listappartements.component.css']
})
export class ListappartementsComponent {
  listappartements:any;
constructor(
  private s: AppartementService,
  private router:Router
  ){

}
ngOnInit(){
  this.s.fetchAppartements().subscribe(
    (result)=>{
      this.listappartements=result
      console.log(this.listappartements)
    }
  );
}
callComponentUpdate(id:any){
  this.router.navigate(['/updateappartement/'+id])
}
}

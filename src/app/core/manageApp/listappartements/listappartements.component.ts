import { Component } from '@angular/core';
import { AppartementService } from '../service/appartement.service';

@Component({
  selector: 'app-listappartements',
  templateUrl: './listappartements.component.html',
  styleUrls: ['./listappartements.component.css']
})
export class ListappartementsComponent {
  listappartements:any;
constructor(private s: AppartementService){

}
ngOnInit(){
  this.s.fetchAppartements().subscribe(
    (result)=>{
      this.listappartements=result
      console.log(this.listappartements)
    }
  );
}
}

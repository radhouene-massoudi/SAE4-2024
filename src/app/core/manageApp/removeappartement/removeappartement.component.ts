import { Component } from '@angular/core';
import { AppartementService } from '../service/appartement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeappartement',
  templateUrl: './removeappartement.component.html',
  styleUrls: ['./removeappartement.component.css']
})
export class RemoveappartementComponent {
  constructor(
    private s: AppartementService,
    private ac: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.s.findAppById(this.ac.snapshot.params['id']).subscribe(
      (data) => {
        if (data !=null) {
          this.s.removeAppartement(this.ac.snapshot.params['id']).subscribe(
            () => {
              this.router.navigate(['listapp'])
            }
          );
        }
      },
      (err) => {
        switch (err.status) {
          case 404: alert("app n'existe pas ");break;
          case 0: alert("server down "); break;
        }
        
      }
    );



  }
}

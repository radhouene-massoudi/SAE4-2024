import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ResidencesComponent } from './core/manage residence/residences/residences.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailresidenceComponent } from './core/manage residence/detailresidence/detailresidence.component';
import { DeleteresidenceComponent } from './core/manage residence/deleteresidence/deleteresidence.component';

const r: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'detail/:idt', component: DetailresidenceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent },
  {
    path: 'r', component: ResidencesComponent, children: [
      { path: 'remove', component: DeleteresidenceComponent }
    ]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

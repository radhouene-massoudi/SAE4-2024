import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  constructor(private http:HttpClient) { }
  addAppartement(data:any){
return this.http.post('http://localhost:3000/appartement',data)
  }
  fetchAppartements(){
    return this.http.get('http://localhost:3000/appartement')
  }
}

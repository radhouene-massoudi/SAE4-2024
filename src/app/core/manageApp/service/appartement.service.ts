import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/model/Apartment';
import { AppartementCrud } from 'src/app/model/appartement-crud';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  constructor(private http: HttpClient) { }

  addAppartement(data:any) {
    return this.http.post('http://localhost:3000/appartement', data)
  }
  fetchAppartements():Observable<AppartementCrud[]> {
    return this.http.get<AppartementCrud[]>('http://localhost:3000/appartement')
  }
  removeAppartement(id: any) {
    return this.http.delete('http://localhost:3000/appartement/' + id)
  }
  findAppById(id: any):Observable<AppartementCrud> {
    return this.http.get<AppartementCrud>("http://localhost:3000/appartement/" + id)
  }
  updateAppartement(data: any, id: any) {
    return this.http.put("http://localhost:3000/appartement/" + id, data)
  }
}

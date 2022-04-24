import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../interfaces/localidad';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http:HttpClient) { }
  private localidadUrl = 'http://faraones.herokuapp.com/localidades';

  getLocalidades(): Observable<Localidad[]> {
    return this.http.get<Localidad[]>(this.localidadUrl)   
  }
}

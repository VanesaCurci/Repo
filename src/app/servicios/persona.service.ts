import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }
  private personaUrl = 'https://faraones.herokuapp.com/personas';

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personaUrl)   
  }

  

}

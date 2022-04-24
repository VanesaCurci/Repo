import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../interfaces/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient,) { }

  private educacionUrl = 'http://faraones.herokuapp.com/educacion'

  getEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.educacionUrl)   
  }

  addEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.educacionUrl,educacion);
  }

  deleteEducacion(id:number): Observable<Educacion> {
    const url = `${this.educacionUrl}/${id}`
    return this.http.delete<Educacion>(url);
  }

  getEducacion(id: number): Observable<Educacion> {
    const url = `${this.educacionUrl}/${id}`;
    return this.http.get<Educacion>(url)
  }

  updateEducacion(educacion:Educacion): Observable<Educacion> {
    const url = `${this.educacionUrl}/${educacion.id}?titulo=${educacion.titulo}&lugar=${educacion.lugar}&duracion=${educacion.duracion}`;
    return this.http.put<Educacion>(url,educacion) 
  }
}

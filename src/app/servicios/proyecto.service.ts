import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient,) { }

  private proyectoUrl = 'https://faraones.herokuapp.com/proyectos'

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectoUrl)   
  }

  addProyecto(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.proyectoUrl,proyecto);
  }

  deleteProyecto(id:number): Observable<Proyecto> {
    const url = `${this.proyectoUrl}/${id}`
    return this.http.delete<Proyecto>(url);
  }

  getProyecto(id: number): Observable<Proyecto> {
    const url = `${this.proyectoUrl}/${id}`;
    return this.http.get<Proyecto>(url)
  }

  updateProyecto(proyecto:Proyecto): Observable<Proyecto> {
    const url = `${this.proyectoUrl}/${proyecto.id}?titulo=${proyecto.titulo}&descripcion=${proyecto.descripcion}`;
    return this.http.put<Proyecto>(url,proyecto) 
  }
}

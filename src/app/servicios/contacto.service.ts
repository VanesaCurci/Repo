import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient,) { }
  private contactoUrl = 'http://localhost:8080/contactos'

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.contactoUrl)   
  }
}

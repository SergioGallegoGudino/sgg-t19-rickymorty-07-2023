import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje.Model';

const url = "http://localhost:3000/characters";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  // Pasamos por el constructor el HttpClient
  constructor(private http: HttpClient) { }
  // Creamos un método que muestre todos los personajes de la base de datos
  getAll():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(url);
  }
  // Creamos un método para crear un personaje a partir de los datos recibidos
  create(data: any): Observable<any>{
    return this.http.post(url, data);
  }
  // Creamos un método para actualizar los datos de un personaje
  update(id: any, data: any): Observable<any>{
    return this.http.put(`${url}/${id}`, data);
  }

}

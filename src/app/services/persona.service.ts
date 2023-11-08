import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  BASE_URL: string = 'https://backendprofe-qucd72253a-uc.a.run.app/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.BASE_URL}/personas`);
  }

  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.BASE_URL}/personas/${id}`);
  }

  createPersona(persona: Persona): Observable<Persona> {
   return this.http.post<Persona>(`${this.BASE_URL}/personas`, persona);
  }

  deletePersona(id: string): Observable<Persona> {
    return this.http.delete<Persona>(`${this.BASE_URL}/personas/${id}`);
  }
  

  updatePersona(id: string, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.BASE_URL}/personas?persona.id=${id}`, persona);
  }
}


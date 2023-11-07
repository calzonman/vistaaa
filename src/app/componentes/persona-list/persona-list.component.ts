import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

import { Persona } from '../../interfaces/Persona'

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  persona: Persona = {
    id: null,
    nombre: '',
    apellido: '',
    fecha_nacimiento: null
  };

  personas: Persona[]=[];

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas()
    .subscribe({
      next: res => {this.personas = res;
      },
      error: err => {console.log(err.error.msg);
      }
     });
  }

  deletePersona(id: string): void {
    this.personaService.deletePersona(id)
    .subscribe({
      next: res => {console.log(res);
      },
      error: err => {console.log(err.error.msg);
      }
     });
  }
}

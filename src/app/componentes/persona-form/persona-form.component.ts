import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona'
import { PersonaService } from '../../services/persona.service'

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  persona: Persona = {
    id: null,
    nombre: '',
    apellido: '',
    fecha_nacimiento: null
  };

  ngOnInit() {
    
  }

  constructor(private personaService: PersonaService) {}

  submitPersona() {
    this.personaService.createPersona(this.persona)
      .subscribe({
      next: res => {console.log(res);
      },
      error: err => {console.log(err.error.msg);
      }
     });
  }

}

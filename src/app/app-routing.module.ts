import { Component, NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PersonaListComponent} from './componentes/persona-list/persona-list.component'
import {PersonaFormComponent} from './componentes/persona-form/persona-form.component'

const routes: Routes = [
  {
    path: '',
    component: PersonaListComponent
  },

  {
    path: 'persona',
    component: PersonaListComponent
  },

  {
    path: 'persona/crear',
    component: PersonaFormComponent
  },

  {
    path: 'persona/:id',
    component: PersonaFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

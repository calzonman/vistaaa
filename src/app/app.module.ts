import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PersonaListComponent } from './componentes/persona-list/persona-list.component';
import { PersonaFormComponent } from './componentes/persona-form/persona-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonaListComponent,
    PersonaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { IdiomaComponent } from './componentes/idioma/idioma.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AddtecnoComponent } from './add_component/addtecno/addtecno.component';
import { AddeduComponent } from './add_component/addedu/addedu.component';
import { AddidioComponent } from './add_component/addidio/addidio.component';
import { AddproyeComponent } from './add_component/addproye/addproye.component';
import { EdittecnoComponent } from './edit_component/edittecno/edittecno.component';
import { EditidioComponent } from './edit_component/editidio/editidio.component';
import { EditeduComponent } from './edit_component/editedu/editedu.component';
import { EditproyeComponent } from './edit_component/editproye/editproye.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformacionComponent } from './vistas/informacion/informacion.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { LoginComponent } from './usuario/auth/login/login.component';
import { RegistroComponent } from './usuario/auth/registro/registro.component';

import { interceptorProvider } from './usuario/service/interceptors.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    TecnologiaComponent,
    IdiomaComponent,
    ProyectoComponent,
    EducacionComponent,
    AddtecnoComponent,
    AddeduComponent,
    AddidioComponent,
    AddproyeComponent,
    EdittecnoComponent,
    EditidioComponent,
    EditeduComponent,
    EditproyeComponent,
    InicioComponent,
    NavbarComponent,
    InformacionComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeduComponent } from './add_component/addedu/addedu.component';
import { AddidioComponent } from './add_component/addidio/addidio.component';
import { AddproyeComponent } from './add_component/addproye/addproye.component';
import { AddtecnoComponent } from './add_component/addtecno/addtecno.component';
import { AppComponent } from './app.component';
import { EditeduComponent } from './edit_component/editedu/editedu.component';
import { EditidioComponent } from './edit_component/editidio/editidio.component';
import { EditproyeComponent } from './edit_component/editproye/editproye.component';
import { EdittecnoComponent } from './edit_component/edittecno/edittecno.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { InformacionComponent } from './vistas/informacion/informacion.component';
import { InicioComponent } from './vistas/inicio/inicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:'inicio', component: InicioComponent},
  {path:'informacion', component: InformacionComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'addtecno', component: AddtecnoComponent},
  {path:'addedu',component:AddeduComponent},
  {path:'addidi', component:AddidioComponent},
  {path:'addproye',component:AddproyeComponent},
  {path:'edittecno/:id', component: EdittecnoComponent },
  {path:'editedu/:id',component:EditeduComponent},
  {path:'editidi/:id',component:EditidioComponent},
  {path:'editproye/:id', component:EditproyeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

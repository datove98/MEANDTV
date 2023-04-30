import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {path:"lista", component: ListaComponent},
  {path:'lista/:id', component:LibroComponent},
  {path:'', redirectTo:'/lista', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/home/personajes/personajes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { DetallesComponent } from './components/home/personajes/detalles/detalles.component';
import { AddPersonajesComponent } from './components/home/personajes/add-personajes/add-personajes.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
// Creamos las rutas de la aplicación
const routes: Routes = [
  // En cada ruta excepto el login y register comprobamos que el usuario no pueda acceder sin iniciar sesión y lo enviamos al login
  // Es necesario puntuar este reenvio en cada sección excepto en el login y el register debido a nuestra estructura de componentes y archivos
  {
  path: `` ,
    component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: `home` ,
    component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: `personajes`,
    component: PersonajesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: `detalles/:personaje`,
    component: DetallesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: `login`,
    component: LoginComponent
  },
  {
    path: `register`,
    component: RegisterComponent
  },
  {
    path: `about`,
    component: AboutComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: `add`,
    component: AddPersonajesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

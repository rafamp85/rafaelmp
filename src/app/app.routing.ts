import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { VideosComponent } from './components/videos/videos.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'my-services', component: MyServicesComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

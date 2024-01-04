import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import path from 'path';
import { UsComponent } from './components/us/us.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'services',component:OurServicesComponent},
    {path:'proyects',component:WorkHistoryComponent},
    {path:'us',component:UsComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];

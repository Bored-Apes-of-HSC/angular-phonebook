import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
 import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
{
    path:"",
    component:HomeComponent
},
{
    path:"contact-list",
    component:ContactListComponent
},
{
    path:"add-contact",
    component:AddContactComponent
},
{
    path:"edit-contact/:id",
    component:EditContactComponent
},
{
    path:"home",
    redirectTo:""
},
{
    path:"contact-details/:id",
    component:ContactDetailsComponent
},
{
    path:"parent",
    component:ParentComponent
}

];

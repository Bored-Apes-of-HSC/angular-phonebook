import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HomeComponent,ContactListComponent,AddContactComponent,EditContactComponent,RouterOutlet,RouterLink,ParentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}

import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { NgFor, NgIf } from '@angular/common';
import { GenderPipe } from '../../pipes/gender.pipe';
import { ContactService } from '../../services/contact.service';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactFilterComponent } from '../contact-filter/contact-filter.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor,GenderPipe,NgIf,RouterLink,ContactItemComponent,ContactFilterComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  choice:string="Male"
  contacts:Contact[]=[];

  constructor(private service:ContactService){

    this.service.getAllContacts().subscribe(data=>this.contacts=data);

  }

  refresh(){
    this.service.getAllContacts().subscribe(data=>this.contacts=data);
   }

   updateContacts(evtData:Contact[]){
    this.contacts=evtData;
   }


   filterContacts(choice:any){

     switch(choice){
      case "all":
       this.refresh();
       break;
      case "Male":
        this.contacts=this.contacts.filter(c=>c.gender=="Male");
        break;

        case "Female":
          this.contacts=this.contacts.filter(c=>c.gender=="Female");
          break;
     }
   }
 
}

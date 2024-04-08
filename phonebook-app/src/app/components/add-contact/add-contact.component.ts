import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

contact:Contact

constructor(private service:ContactService,private router:Router){
  this.contact=new Contact(0,"","","","","","","","","","");
}

addContact(){
  // console.log(this.contact);
  this.service.addNewContact(this.contact).subscribe(data=>
    {
      alert("record inserted") ;
    //nagivate to contact list
    this.router.navigate(['contact-list']);
    })
}

}

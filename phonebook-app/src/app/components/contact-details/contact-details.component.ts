import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

  contact?:Contact;

  constructor(private service:ContactService,private activatedRoute:ActivatedRoute){
   
   let params=this.activatedRoute.params.subscribe(params=>
    {
      let id=params["id"];
   this.service.getContactDetails(id).subscribe(data=>this.contact=data);
  }
  );

 

    //this.contact=new Contact(1,"Ashish","Kumar","Male","13-01-2001","ashish@gmail.com","9876543210","Ranchi","Jharkhand","India",'./assets/images/1.jpg')
    // this.service.getContactDetails().subscribe(data=>this.contact=data);
  }


}

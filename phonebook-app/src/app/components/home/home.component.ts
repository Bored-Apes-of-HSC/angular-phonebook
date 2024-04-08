import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  contact?:Contact;

  constructor(private service:ContactService){

   // this.contact=new Contact(1,"Ashish","Kumar","Male","13-01-2001","ashish@gmail.com","9876543210","Ranchi","Jharkhand","India",'./assets/images/1.jpg')
    this.service.getContactDetails(1).subscribe(data=>this.contact=data);
  }
}

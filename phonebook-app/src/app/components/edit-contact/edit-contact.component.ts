import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit{
 
  contactForm:FormGroup=new FormGroup({});
 
  constructor(private service:ContactService,private activatedRoute:ActivatedRoute, private router:Router){
 
    this.contactForm=new FormGroup({
      id:new FormControl(0),
      firstname:new FormControl("",Validators.compose([
                                                                  Validators.required,
                                                                  Validators.minLength(5),
                                                                  Validators.maxLength(10)
                                                                ])),
      lastname:new FormControl("",Validators.compose([
                                                                  Validators.required,
                                                                  Validators.minLength(5),
                                                                  Validators.maxLength(10)
                                                                ])),
      dob:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      phone:new FormControl("",Validators.compose([Validators.required,Validators.pattern("\\d{10,10}")])),
      gender:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required),
      state:new FormControl("",Validators.required),
      country:new FormControl("",Validators.required),
      picture:new FormControl("",Validators.required)
    });                      
  }
 
 
  ngOnInit(): void {  


    this.activatedRoute.params.subscribe(params=>{
      let id=params['id'];
    this.service.getContactDetails(id).subscribe(data=>{
                                                // contact=data;
                                                this.contactForm.patchValue(data);
                                              });
    })
   
  }
 
 
  SaveContact() {
    this.service.updateContact(this.contactForm.value)
                .subscribe(data=>{
                  alert("Record updated");
                  //nagivate to the contact list
                  this.router.navigate(['contact-list'])
                });    
  }
}
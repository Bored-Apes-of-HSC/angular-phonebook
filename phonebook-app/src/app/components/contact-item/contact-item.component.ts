import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Router, RouterLink } from '@angular/router';
import { GenderPipe } from '../../pipes/gender.pipe';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [GenderPipe,RouterLink],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
   
  constructor(private service:ContactService,private router:Router){

  }
 

  @Input()
  c:Contact=new Contact(0,"","","","","","","","","","");


  @Output()
  onParentEvt=new EventEmitter<Contact[]>();

  deleteContactById(id:number)
  {

    if(!window.confirm("Are you sure?")){
      return;
    }
  
   this.service.deleteContact(id)
   .subscribe(data=>{
    alert("record"+id);
    // this.refresh();
    // this.router.navigate(['contact-list']);
    //get the updated contacts and send it to parent control list
    this.service.getAllContacts().subscribe(data=>{
      this.onParentEvt.emit(data);
    })
   });
    
  }

  refresh(){
    // this.service.getAllContacts().subscribe(data=>this.contacts=data);
   }
}

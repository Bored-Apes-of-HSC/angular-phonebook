import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  standalone: true,
  imports: [],
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.css'
})
export class ContactFilterComponent {

  @Output()
 onFilter= new EventEmitter<string>();

 filterByAll(radioOption:number){
  if(radioOption==1){
   this.onFilter.emit("all");
  }
  else if(radioOption==2){
    this.onFilter.emit("Male");
   }
   else if(radioOption==3){
    this.onFilter.emit("Female");
   }
 }
 }


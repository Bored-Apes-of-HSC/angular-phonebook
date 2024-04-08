import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
uname:string="";
@Output()
onNameSend=new EventEmitter<string>();

sendData(){
  //console.log(this.uname);
  this.onNameSend.emit(this.uname);
}
}
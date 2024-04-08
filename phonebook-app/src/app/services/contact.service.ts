import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 
})
export class ContactService {

   baseUrl:string="http://localhost:8080/contacts/"

  constructor(private http:HttpClient) { }

  getContactDetails(id:number):Observable<Contact>
  {
    return this.http.get<Contact>(this.baseUrl+id.toString());
  }

  getAllContacts():Observable<Contact[]>{
    // console.log("getAllContacts");
    return this.http.get<Contact[]>(this.baseUrl);
  }

  addNewContact(contact:Contact):Observable<any>{
  return this.http.post(this.baseUrl,contact);

  }

  deleteContact(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+id.toString());
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.baseUrl + contact.id.toString(), contact);

  }


}

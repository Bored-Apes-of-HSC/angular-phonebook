export class Contact {

    id:number=0;
    firstname:string="";
    lastname:string="";
    gender:string="";
    dob:string="";
    email?:string="";
    phone?:string="";
    city?:string="";
    state:string="";
    country:string="";
    picture?:string='./assets/images/1.jpg'

    constructor(id:number,
                fname:string,
                lname:string,
                gender:string,dob:string,email:string,phone:string,city:string,state:string,country:string,picture:string){
         
            this.id=id;
            this.firstname=fname;
            this.lastname=lname;
            this.gender=gender;
            this.dob=dob;
            this.email=email;
            this.phone=phone;
            this.city=city;
            this.state=state;
            this.country;
            this.picture=picture;

    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  Hello = "Can You Please Enter Your Email";
  Hello1 = "Can You Please Enter Your Email";

  firstName : string = "Pradeep";
  lastName : string = "Rao";  
  badHtml : string = "Hello <script> alert('Hello')</script> World";

 getfullName(): string {
    return this.firstName + ' ' + this.lastName
  } 


 details = ""; 



  userData = {
    name:"Ram",
    pass:""
}

  getDetails(){
      console.log(this.userData);
      alert('Hello')
  } 

   employeeDetails : any = [];

    exEmp : any = [];

  constructor(){

    this.employeeDetails = [   
          {empCode:"10732",name:"Rohit",salary:"405500",gender:"Male",dob:"10-10-2018",},
          {empCode:"10733",name:"Rohit Rao",salary:"400110",gender:"Male",dob:"10-10-2018",},
          {empCode:"10734",name:"RAM",salary:"40200",gender:"Male",dob:"10-10-2018",},
          {empCode:"10735",name:"Hello",salary:"4000",gender:"Male",dob:"10-10-2018",},
          {empCode:"10736",name:"Rmesh",salary:"40600",gender:"Male",dob:"10-10-2018",}

  ],

    this.exEmp = [
          {empCode:"10732",name:"Ra",salary:"405500",gender:"Male",dob:"10-10-2018",},
          {empCode:"10733",name:"Rohit Rao",salary:"400110",gender:"Male",dob:"10-10-2018",},
          {empCode:"10734",name:"RAM",salary:"40200",gender:"Male",dob:"10-10-2018",},
          {empCode:"10735",name:"Hello",salary:"4000",gender:"Male",dob:"10-10-2018",},
          {empCode:"10736",name:"Rmesh",salary:"40600",gender:"Male",dob:"10-10-2018",}
    ]

  }


    

  showPass(){
     this.details = this.userData['pass'];
  }




}

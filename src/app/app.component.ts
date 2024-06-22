import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';

  details={name:"",password:"",email:""};

  register = new FormGroup({
     name:new FormControl("",Validators.required),
     password:new FormControl("",Validators.minLength(5)),
     email:new FormControl("",Validators.email)
  });

  getData(){
this.details.name = this.register.value.name;
this.details.password=this.register.value.password;
this.details.email=this.register.value.email;
    
  }

  get vname(){
    return this.register.get("name");
  }

  get vpwrd(){
    return this.register.get("password")
  }

  get vemail(){
    return this.register.get("email")
  }
  
}

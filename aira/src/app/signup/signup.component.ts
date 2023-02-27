import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../model/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userGroup: Users = new Users();
  userData!: Users[];
showcreate:boolean=true;
showupdate!:boolean;

  constructor(private service: UserService) {
    this.service.getUser().subscribe((result) => {
      this.userData = result;
    })
  }

  ngOnInit(): void {
 
  }

  signup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.email])
  });


  getdata() {
    this.service.getUser().subscribe(result => {
      this.userData = result;
      console.log("user data: >>", this.userData);
    });
  }


  get auser() {
    return this.signup.get('username');
  }
  get apass() {
    return this.signup.get('password');
  }


  createuserdetails() {
    this.userGroup.username = this.signup.value.username;
    this.userGroup.password = this.signup.value.password;

    this.service.createUser(this.userGroup).subscribe((result:Users[])=> {
    

      alert('User data created successfully....');
      this.signup.reset();
    this.getdata();  
    });
  }

  updateuser() {
    this.userGroup.username = this.signup.value.username;
    this.userGroup.password = this.signup.value.password;

    this.service.updateUser(this.userGroup.id, this.userGroup).subscribe(result => {
      console.log("Updated value :: >>", result);
      alert('Updated successfully....');
      this.signup.reset();
      this.getdata();
      this.showupdate=false;
      this.showcreate=true;
    })
  }

  editUser(user: any) {
this.userGroup.id=user.id;
    this.signup.controls['username'].setValue(user.username);
    this.signup.controls['password'].setValue(user.password);
    this.showcreate=false;
    this.showupdate=true;
    
  }



  removeUser(id: number) {
    this.service.deleteUser(id).subscribe((result => {
      console.log("deleted data : >>", result);
      alert("User data deleted successfully");
      this.getdata();
    })
    );
  }

}

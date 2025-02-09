import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators}  from '@angular/forms'
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private readonly userService:UserService, private router: Router ){}

  errorMessage:string=""
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    age: new FormControl(null, [Validators.required, Validators.min(18),Validators.max(50)]),
    email: new FormControl (null, [Validators.required , Validators.email]),
    password: new FormControl (null, [Validators.required])
  })




  sendData(){
    if(this.registerForm.valid){
      this.userService.signup(this.registerForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          this.router.navigate(['/login'])
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err.error.mg);
          this.errorMessage=err.error.mg
        },
        complete:()=>{}

      })
    }
    
  }
}

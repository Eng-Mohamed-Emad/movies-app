import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private readonly userService:UserService, private router: Router ){}

  errorMessage:string=""
  loginForm = new FormGroup({
    email: new FormControl (null, [Validators.required , Validators.email]),
    password: new FormControl (null, [Validators.required])
  })




  sendData(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          this.router.navigate(['/movie'])
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err.error.mg);
          this.errorMessage=err.error.err
        },
        complete:()=>{}

      })
    }
    
  }
}

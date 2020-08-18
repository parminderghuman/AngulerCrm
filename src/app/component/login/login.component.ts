import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { log } from 'util';
import { AuthenticationService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private router:Router,private fb: FormBuilder,private authService:AuthenticationService,private route: ActivatedRoute) { 
    this.form = fb.group({
      username:['',Validators.required],
      password:["",Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.form.value.username,this.form.value.password).subscribe((data)=>{
      console.log("User is logged in",data);
      this.router.navigateByUrl(   this.route.snapshot.queryParams['returnUrl'] || '/');
      //this.router.navigateByUrl( '/');
      
    },(error)=>{
      console.log("User is not logged in",error.error);
      //this.router.navigateByUrl('/');
    })

  }

}

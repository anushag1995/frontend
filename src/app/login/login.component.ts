import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import * as CryptoJS from 'crypto-js';
import {Router,ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup=new FormGroup({
    email:new FormControl('',Validators.required),
    pwd:new FormControl()

  })

  constructor(public router: Router,private _http:ProjectService,private route: ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
  }
  login(){
    if(!this.loginForm.valid){
      console.log('Invalid Form');return;
    }

    this._http.getLoginDetails(this.loginForm.value.email).subscribe(data=>{
      console.log(data);
      if(CryptoJS.AES.decrypt(data[0]['pass'],'leap2018').toString(CryptoJS.enc.Utf8)===this.loginForm.value.pwd)
      {
        console.log('Hello');
        this.auth.sendToken(this.loginForm.value.email);
         this.router.navigate(['/dashboard']);
       }
   })
  
    console.log(this.loginForm.value);
  }
   
 

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  frmRegistro = new FormGroup({
    name : new FormControl('',Validators.required),
    user : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor( private authServ : AuthService, private router : Router) { }

  ngOnInit() {
  }
  entrar(){
    if(this.frmRegistro.invalid){
     
      alert("completa todos los campos.");

    }else{
      console.log(this.frmRegistro.value);
      this.authServ.RegisterUser(this.frmRegistro.value).then(c=>{
        if(c){
          alert("Registrado correctamente! Inicia sesión.")
          this.router.navigate(['/main/tabs/login'])
        }
        
      }).catch(err=>{
        console.log(err);
      })
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/Player.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  title = 'Tauhid';

  registerForm: FormGroup;


    playerName: string = '';
    fullname: string = "";
    email: string = "";
    phone: string = "";
    password: any = "";
    repassword: any = "";
    
    constructor(
      private Router: Router,
      private formBuilder: FormBuilder,
      private playerService: PlayerService
    ) {
      this.registerForm = this.formBuilder.group({
        PlayerName: ['', Validators.required],
        PlayerEmail: ['', [Validators.required, Validators.email]],
        PlayerPhoneNumber: ['', Validators.required],
        PlayerPassword: ['', Validators.required],
      });
    }

    onRegister() {
      if (this.registerForm.invalid) {
        // Form validation failed, handle the error or display a message
        return;
      }
    
      const player: Player = {
        PlayerName: this.registerForm.value.PlayerName,
        PlayerEmail: this.registerForm.value.PlayerEmail,
        PlayerPhoneNumber: this.registerForm.value.PlayerPhoneNumber,
        PlayerPassword: this.registerForm.value.PlayerPassword,
      };
    
      this.playerService.registerPlayer(player).subscribe(
        (response) => {
          // Handle successful registration
          alert("Registration successful")
          this.Router.navigate(['../login']);
          console.log('Registration successful');
          // Additional logic or redirection if needed
        },
        (error) => {
          // Handle registration error
          console.error('Registration failed:', error);
          // Additional error handling or display a message
        }
      );
    }
    
  

    
  }

  // ngOnInit(): void {
  //   this.registerForm = new FormGroup({
  //     username: new FormControl("", [Validators.required]),
  //     email: new FormControl("", [Validators.required, Validators.email]),
  //     phone: new FormControl("", [Validators.required]),
  //     password: new FormControl("", 
  //     [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  //     repassword: new FormControl("", [Validators.required, Validators.minLength(4)]),
  //   })
  // }

  // onRegister() {
  //   localStorage.setItem("fullname", this.fullname)!;
  //   localStorage.setItem("email", this.email)!;
  //   localStorage.setItem("phone", this.phone)!;
    // localStorage.setItem("password", this.form.repassword);
    // if(this.password == this.repassword && this.registerForm.valid) {
    //   localStorage.setItem("password", this.password)!;
    //   localStorage.setItem("password", this.repassword)!;
    //   console.log(this.registerForm.value);
    //   alert("registered successfully");
    //   this.Router.navigate(['../login']);
    // } else {
    //   alert("Password is not equal to confirm psasword");
    // }
  //}

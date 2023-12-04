import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginResponse } from 'src/app/models/LoginResponse.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      PlayerName: ['', Validators.required],
      PlayerPassword: ['', Validators.required]
    });
  }

  fullname: string = '';
  password: string = '';
  
  onLogin(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.playerService.loginPlayer(formData).subscribe(
        (response) => {
          // Login successful, redirect to the desired page
          const message = response.message;
          alert(message);
          // Set PlayerName in the service
          this.playerService.setPlayerName(formData.PlayerName);
          this.router.navigate(['/home']);
        },
        (error) => {
          alert("invalid credentials");
          console.log(error);
        }
      );
    }
  }
  

  // constructor(private Router: Router, private activatedRoute: ActivatedRoute) {
  //  }

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     fullname: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }



  // onClick() {
  //   // console.log(this.form);
  //   if(this.fullname == localStorage.getItem('fullname') 
  //   && 
  //   this.password == localStorage.getItem('password')) {
  //     alert('logged in successfully');
  //     this.Router.navigate(['../home']);
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // }
}
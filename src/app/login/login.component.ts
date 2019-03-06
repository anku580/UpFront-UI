import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = null;
  loginDetails: any;
  flag = true;
  merchantLanding = false;

  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required': 'username is required.'
    },
    'password': {
      'required': 'password is required.',
      'minlength': 'password must be at least 2 characters long',
      'maxlength': 'password cannot be more than 25 characters long'
    }

  };

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.flag = false;
    this.createForm();
    // localStorage.removeItem('currentUser');
  }

  createForm() {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    })

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  toggle() {

    this.flag = !this.flag;
    return this.flag;
  }

  onSubmit() {

    this.merchantLanding = true;
    this.loginForm.value.role = "user";
    this.loginDetails = this.loginForm.value;
    console.log(this.loginDetails);
    let data = {
        "username" : this.loginForm.value.username,
        "password" : this.loginForm.value.password
    }
    console.log(data);
    this.authService.logIn(data)
      .subscribe(res => {
        if (res.success) {
          console.log(res)
          alert("Logged in")
          this.router.navigateByUrl('/restaurants');
        }
        else {
          console.log(res);
        }
      },
        error => {
          console.log(error);

        })
  }
}

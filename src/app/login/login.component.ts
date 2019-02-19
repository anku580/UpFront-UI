import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format'
    },
    'password': {
      'required': 'password is required.',
      'minlength': 'password must be at least 2 characters long',
      'maxlength': 'password cannot be more than 25 characters long'
    }

  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.flag = false;
    this.createForm();
  }

  createForm() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
    // this.authService.logIn(this.loginDetails)
    //   .subscribe(res => {
    //     if (res.success) {
    //       console.log(res)
    //       alert("Logged in")
    //       this.router.navigateByUrl('/dashboard');
    //     }
    //     else {
    //       console.log(res);
    //     }
    //   },
    //     error => {
    //       console.log(error);

    //     })
  }
}

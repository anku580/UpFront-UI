import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  submitted = null;
  signupDetails: any;

  formErrors = {
    'email': '',
    'password': '',
    'username': ''
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
    },
    'username': {
      'required': 'username is required',
      'minlength': 'username should be atleast 2 characters long',
      'maxlength': 'username cannot be more than 10 characters long'
    }

  };

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.signupform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    })

    this.signupform.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.signupform) { return; }
    const form = this.signupform;

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

  onSubmit() {


    //this.signupform.value.role = "user";
    this.signupDetails = this.signupform.value;
    console.log(this.signupDetails);
    this.authService.signUp(this.signupDetails)
      .subscribe(res => {
        if (res.success) {
          console.log(res)
          alert("Account Created")
          this.router.navigateByUrl('/login');
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

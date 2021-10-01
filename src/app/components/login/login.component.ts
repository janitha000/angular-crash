import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form! : FormGroup;
  returnUrl! : string;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password : ['', Validators.required]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    console.log("form submitted")
    console.log(this.f)
    this.authService.login(this.f.email.value, this.f.password.value).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    },
    (error) => {
      console.log("error from login service", error);
    })
  }

}

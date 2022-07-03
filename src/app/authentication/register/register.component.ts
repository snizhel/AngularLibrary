import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    phone: null,
    address: null,
    roles: ["USER"],
  };
  message: string;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(): void {
    const { username, password, phone, address, birthday } = this.form;
    this.authService
      .register(username, password, phone, address, birthday, ["USER"])
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.message = "Register successfully";
          this.router.navigate(["/login"]);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}

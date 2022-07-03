import { TokenStorageService } from "src/app/services/token-storage.service";
import { Component, OnInit } from "@angular/core";
import { user } from "src/app/models/user.model";

import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  user: user = {
    name: "",
    password: "",
    phone: "",
    address: "",
    birthday: "",
  };
  message: string;
  currentUser: any;
  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {
    this.currentUser = this.tokenStorageService.getUser();
  }

  ngOnInit() {
    this.getOneUser();
  }
  onSubmit() {
    this.updateUser();
  }
  getOneUser() {
    this.userService.getOneUser(this.currentUser.id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateUser() {
    const dataTemp = {
      name: this.user.name,
      password: this.user.password,
      phone: this.user.phone,
      address: this.user.address,
      birthday: this.user.birthday,
      roles: this.user.roles,
    };
    this.userService.updateUser(this.user.id!, dataTemp).subscribe(
      () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your profile has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

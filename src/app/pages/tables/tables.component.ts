import { TokenStorageService } from "src/app/services/token-storage.service";
import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";
import { user } from "src/app/models/user.model";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
})
export class TablesComponent implements OnInit {
  name: "";
  page = 1;
  userList: user[] = [];
  currentUser: any;
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {
    this.currentUser = this.tokenStorageService.getUser();
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe(
      (data) => {
        this.userList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getAllUsers();
  }
  searchUser() {
    if (!this.name) {
      this.getAllUsers();
    } else {
      this.userService.searchUser(this.name).subscribe(
        (data) => {
          this.userList = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

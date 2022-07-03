import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { user } from "src/app/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  currentUser: user = {};

  message = "";
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getOneUser(id: number) {
    this.userService.getOneUser(id).subscribe(
      (data) => {
        this.currentUser = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.getOneUser(this.route.snapshot.params.id);
  }
  onSubmit() {
    this.userService
      .updateUser(this.currentUser.id, this.currentUser)
      .subscribe(
        (data) => {
          this.message = "User updated successfully";
          Swal.fire("Updated!", "Your user has been updated.", "success");
          this.router.navigate(["/tables"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  deleteUser(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.userService.deleteUser(this.currentUser.id).subscribe(
        (data) => {
          console.log(data);
          Swal.fire("Deleted!", "Your user has been deleted.", "success");
          this.router.navigate(["/tables"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  banUser() {
    this.authService.banUser(this.currentUser.id).subscribe(
      () => {
        Swal.fire("Banned!", "Your user has been banned.", "success");
        this.router.navigate(["/tables"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  unbanUser() {
    this.authService.unbanUser(this.currentUser.id).subscribe(
      () => {
        Swal.fire("Unbanned!", "Your user has been unbanned.", "success");
        this.router.navigate(["/tables"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

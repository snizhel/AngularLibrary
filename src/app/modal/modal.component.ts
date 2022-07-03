import { Router } from "@angular/router";
import { user } from "./../models/user.model";
import { UserService } from "./../services/user.service";
import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TokenStorageService } from "../services/token-storage.service";
import Swal from "sweetalert2";

@Component({
  selector: "ngbd-modal-content",
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Change your password!</h4>
      <button
        type="button"
        class="btn btn-danger"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="title">Old Password</label>
          <input
            style="color: black;"
            class="form-control"
            type="password"
            id="title"
            [(ngModel)]="oldPassword"
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="author">New Password</label>
          <input
            style="color: black;"
            class="form-control"
            type="password"
            id="description"
            [(ngModel)]="newPassword"
          />
        </div>
        <div class="form-group">
          <label for="author">Confirm Password</label>
          <input
            style="color: black;"
            class="form-control"
            type="password"
            [(ngModel)]="confirmNewPassword"
            name="description"
          />
        </div>
        <p>{{ message }}</p>
      </form>
    </div>
    <div class="modal-footer">
      <button (click)="onSubmit()" type="button" class="btn btn-outline-dark">
        Save changes
      </button>
    </div>
  `,
})
export class NgbdModalContent implements OnInit {
  newPassword: String;
  confirmNewPassword: String;
  oldPassword: String;
  user: user;
  currentUser: any;
  message: String;
  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private tokenStoragenService: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {
    this.currentUser = this.tokenStoragenService.getUser();
  }
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    return this.userService
      .getOneUser(this.currentUser.id)
      .subscribe((data) => {
        this.user = data;
      });
  }
  validateConfirmPassword() {
    if (this.newPassword != this.confirmNewPassword) {
      this.message = "Password not match";
    } else {
      this.message = "";
    }
  }
  onSubmit() {
    if (this.newPassword == this.confirmNewPassword) {
      return this.authService
        .changePassword(this.currentUser.id, this.oldPassword, this.newPassword)
        .subscribe(
          (data) => {
            this.message = data.message;
            this.activeModal.close();
            Swal.fire("Changed!", "Your password has been changed.", "success");
            sessionStorage.clear();
            this.router.navigate(["/login"]);
          },
          (error) => {
            this.message = error.error.message;
          }
        );
    } else {
      this.message = "Password not match";
    }
  }
}

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}

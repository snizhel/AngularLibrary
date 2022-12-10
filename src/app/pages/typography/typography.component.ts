import { borrowBook } from "./../../models/borrowBook.model";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-typography",
  templateUrl: "typography.component.html",
})
export class TypographyComponent implements OnInit {
  borrowBooks: borrowBook[] = [];
  page: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getBorrowBook();
  }
  getBorrowBook() {
    return this.userService.getBorrowBook().subscribe((data) => {
      this.borrowBooks = data;
      console.log(this.borrowBooks);
    });
  }
  setStatus(id: number) {
    return this.userService.setStatus(id).subscribe((data) => {

      this.getBorrowBook();
    });
  }

}

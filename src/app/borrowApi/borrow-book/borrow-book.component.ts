import { ActivatedRoute, Router } from "@angular/router";
import { borrowBook } from "./../../models/borrowBook.model";
import { user } from "./../../models/user.model";
import { BookService } from "./../../services/book.service";
import { book } from "./../../models/book.model";
import { TokenStorageService } from "./../../services/token-storage.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-borrow-book",
  templateUrl: "./borrow-book.component.html",
  styleUrls: ["./borrow-book.component.scss"],
})
export class BorrowBookComponent implements OnInit {
  user: user = {};
  book: book = {};
  message: string;
  startDate = new Date().toISOString().slice(0, 10);
  borrowBook: borrowBook = {
    id: 0,
    userid: {
      id: 0,
    },
    books: [],
    dateOfBorrow: this.startDate,
    expiredTerm: undefined,
    status: "PENDING",
  };
  currentUser: any;
  constructor(
    private tokenStorageService: TokenStorageService,
    private bookService: BookService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.tokenStorageService.getUser();
  }
  getUser() {
    this.userService.getOneUser(this.currentUser.id).subscribe((data) => {
      this.user = data;
      this.borrowBook.userid.id = this.user.id;
      console.log(this.borrowBook.userid.id);
    });
  }
  validateCompareDate() {
    if (new Date(this.borrowBook.expiredTerm.valueOf()) < new Date()) {
      this.message = "Expired date must be greater than start date";
      return false;
    } else {
      this.message = "";
      return true;
    }
  }

  getBook(id: number) {
    this.bookService.getOneBook(id).subscribe((data) => {
      this.book = data;
    });
  }
  ngOnInit(): void {
    this.getUser();
    this.getBook(this.route.snapshot.params.id);
  }

  onSubmit() {
    this.borrowBook.books.push(this.book);
    return this.userService
      .creatBorrowBook(this.borrowBook)
      .subscribe((data) => {
        this.borrowBook = data;
        this.borrowBook.dateOfBorrow = this.startDate;
        Swal.fire({
          title: "Success!",
          text: "Borrow Book Success!",
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
          timerProgressBar: true,
        });
        this.router.navigate(["/icons"]);
      });
  }
}

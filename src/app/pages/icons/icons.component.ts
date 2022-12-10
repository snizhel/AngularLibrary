import { UserService } from "./../../services/user.service";
import { TokenStorageService } from "./../../services/token-storage.service";
import { book } from "./../../models/book.model";
import { BookService } from "./../../services/book.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { user } from "src/app/models/user.model";

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html",
})
export class IconsComponent implements OnInit {
  user: user = {};
  currentUser: any;
  page: number = 1;
  books: book[];
  check = false;
  title?: "";
  author?: "";
  currentIndex = -1;
  currentBook: book = {};
  constructor(
    private userService: UserService,
    private bookService: BookService,
    private tokenStorageService: TokenStorageService
  ) {
    this.currentUser = this.tokenStorageService.getUser();
  }
  getAllBooks() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }
  ngOnInit() {
    this.getAllBooks();
    this.getOneUser();
  }
  getOneUser() {
    this.userService.getOneUser(this.currentUser.id).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  searchBookName() {
    this.currentBook = {};
    this.currentIndex = -1;
    if (!this.title) {
      this.getAllBooks();
    } else {
      this.bookService.searchBook(this.title!).subscribe(
        (data) => {
          this.books = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

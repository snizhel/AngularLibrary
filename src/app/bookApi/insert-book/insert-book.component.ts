import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { book } from "src/app/models/book.model";
import { BookService } from "src/app/services/book.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-insert-book",
  templateUrl: "./insert-book.component.html",
  styleUrls: ["./insert-book.component.scss"],
})
export class InsertBookComponent implements OnInit {
  book: book = {
    title: "",
    author: "",
    publisher: "",
    quantity: 0,
  };
  errorMessage = "";
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Added!", "Your book has been added.", "success");
        this.router.navigate(["/icons"]);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(error);
      }
    );
  }
}

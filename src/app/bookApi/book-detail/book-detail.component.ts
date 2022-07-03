import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { async } from "rxjs";
import { book } from "src/app/models/book.model";
import { BookService } from "src/app/services/book.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent implements OnInit {
  currentBook: book = {
    title: "",
    author: "",
    publisher: "",
    quantity: 0,
  };
  message = "";
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getOneBook(this.route.snapshot.params.id);
  }
  getOneBook(id: number) {
    this.bookService.getOneBook(id).subscribe(
      (data) => {
        this.currentBook = data;
        console.log(this.currentBook);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.updateBook();
    this.router.navigate(["/icons"]);
  }
  updateBook() {
    this.message = "";
    this.bookService
      .updateBook(this.currentBook.id!, this.currentBook)
      .subscribe(
        (res) => {
          console.log(res);
          Swal.fire("Updated!", "Your book has been updated.", "success");
        },
        (error) => {
          console.log(error);
        }
      );
  }
  async clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      await this.bookService.deleteBook(this.currentBook.id!).subscribe(
        (data) => {
          console.log(data);
          this.message = "Delete Successfully";
          Swal.fire("Deleted!", "Your book has been deleted.", "success");
          this.router.navigate(["/icons"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

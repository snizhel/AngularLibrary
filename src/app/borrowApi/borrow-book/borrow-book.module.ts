import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BorrowBookRoutingModule } from "./borrow-book-routing.module";
import { BorrowBookComponent } from "./borrow-book.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [BorrowBookComponent],
  imports: [CommonModule, BorrowBookRoutingModule, FormsModule],
})
export class BorrowBookModule {}

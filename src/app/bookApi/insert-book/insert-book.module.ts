import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InsertBookRoutingModule } from "./insert-book-routing.module";
import { InsertBookComponent } from "./insert-book.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [InsertBookComponent],
  imports: [
    CommonModule,
    InsertBookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InsertBookModule {}

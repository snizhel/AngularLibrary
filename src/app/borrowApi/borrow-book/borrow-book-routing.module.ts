import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowBookComponent } from './borrow-book.component';

const routes: Routes = [{ path: '', component: BorrowBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowBookRoutingModule { }

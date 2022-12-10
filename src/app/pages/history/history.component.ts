import { Component, OnInit } from '@angular/core';
import { borrowBook } from 'src/app/models/borrowBook.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',

})
export class HistoryComponent implements OnInit {
  borrowBooks: borrowBook[] = [];
  borrowBook: borrowBook;
  page: number;
  currentUser: any;
  constructor(private userService: UserService,private tokenStorageService: TokenStorageService) {
    this.currentUser = this.tokenStorageService.getUser();
   }

  ngOnInit(): void {
    this.getAllBorrowByUserId( this.currentUser.id);

  }

  getAllBorrowByUserId(id: number) {
    return this.userService.getBorrowBookById(id).subscribe((data) => {
      this.borrowBooks = data;
      console.log(this.borrowBooks);
    });
  }


}

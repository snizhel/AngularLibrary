import { user } from "src/app/models/user.model";
import { book } from "./book.model";

export class borrowBook {
  id!: number;
  userid!: user;
  dateOfBorrow!: String;
  expiredTerm!: String;
  books?: book[];
}

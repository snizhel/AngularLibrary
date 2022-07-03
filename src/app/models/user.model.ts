import { book } from "./book.model";
import { role } from "./role.model";
export class user {
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  address?: string;
  birthday?: string;
  status?: number;
  roles?: role[];
  books?: book[];
}

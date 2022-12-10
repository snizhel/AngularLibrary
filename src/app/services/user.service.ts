import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { user } from "../models/user.model";
import { borrowBook } from "../models/borrowBook.model";
const url = `${environment.endpoint}`;
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<any> {
    return this.http.get(url + "users");
  }
  getOneUser(id: number): Observable<user> {
    return this.http.get<user>(`${url}users/${id}`);
  }
  searchUser(name: string): Observable<user[]> {
    return this.http.get<user[]>(`${url}users/search/${name}`);
  }
  updateUser(id: number, user: user): Observable<user> {
    return this.http.put<user>(`${url}users/${id}`, user);
  }
  deleteUser(id: number): Observable<user> {
    return this.http.delete<user>(`${url}users/${id}`);
  }
  getBorrowBook(): Observable<borrowBook[]> {
    return this.http.get<borrowBook[]>(`${url}users/borrow`);
  }
  creatBorrowBook(borrowBook: any): Observable<any> {
    return this.http.post(url + "users/borrow", borrowBook);
  }
  setStatus(id:number): Observable<borrowBook> {
    return this.http.put<borrowBook>(`${url}users/borrow/${id}`, {});
  }
  getBorrowBookById(id:number): Observable<borrowBook[]> {
    return this.http.get<borrowBook[]>(`${url}users/borrow/${id}`);
  }
}

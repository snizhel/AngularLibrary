import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { book } from "../models/book.model";
const url = `${environment.endpoint}`;
@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private httpService: HttpClient) {}
  getAllBook(): Observable<book[]> {
    return this.httpService.get<book[]>(`${url}books`);
  }
  getOneBook(id: number): Observable<book> {
    return this.httpService.get<book>(`${url}books/${id}`);
  }
  addBook(book: book): Observable<book> {
    return this.httpService.post<book>(`${url}books`, book);
  }
  updateBook(id: number, book: book): Observable<book> {
    return this.httpService.put<book>(`${url}books/${id}`, book);
  }
  deleteBook(id: number): Observable<book> {
    return this.httpService.delete<book>(`${url}books/${id}`);
  }
  searchBook(title: string): Observable<book[]> {
    return this.httpService.get<book[]>(`${url}books/search/${title}`);
  }
}

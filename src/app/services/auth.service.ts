import { user } from "./../models/user.model";
import { changpassReq } from "./../models/changpassReq.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const url = `${environment.endpoint}`;
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      url + "signin",
      {
        username,
        password,
      },
      httpOptions
    );
  }
  register(
    username: string,
    password: string,
    phone: string,
    address: string,
    birthday: string,
    role: ["USER"]
  ): Observable<any> {
    return this.http.post(
      url + "signup",
      {
        username,
        password,
        phone,
        address,
        birthday,
        role,
      },
      httpOptions
    );
  }
  changePassword(
    id: number,
    oldPassword: String,
    newPassword: String
  ): Observable<any> {
    return this.http.post(
      url + "changePassword",
      {
        id,
        oldPassword,
        newPassword,
      },
      httpOptions
    );
  }
  banUser(id: number): Observable<any> {
    return this.http.put(
      url + "ban/" + id,
      {
        id,
      },
      httpOptions
    );
  }
  unbanUser(id: number): Observable<any> {
    return this.http.put(
      url + "unban/" + id,
      {
        id,
      },
      httpOptions
    );
  }
}

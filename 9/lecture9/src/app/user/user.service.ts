import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../interfaces/user";

@Injectable()
export class UserService {

  private users = new BehaviorSubject<IUser[] | null>(null);
  users$ = this.users.asObservable();

  private user = new BehaviorSubject<IUser | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers = (search: string = '') => {
    const query = search ? `?email_like=${search}` : '';
    this.users.next(null);
    this.http.get<IUser[]>(`/api/users${query}`, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    }).subscribe((users) => this.users.next(users));
  }

  loadUser = (id: number) => {
    this.user.next(null);
    this.http.get<IUser>(`/api/users/${id}`).subscribe(user => {
      this.user.next(user);
    });
  }
}

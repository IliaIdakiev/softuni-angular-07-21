import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { myStringInjectionToken } from "./app.module";
import { IUser } from "./interfaces/user";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(search: string = '') {
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`);
  }

}

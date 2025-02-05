import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
    }


}
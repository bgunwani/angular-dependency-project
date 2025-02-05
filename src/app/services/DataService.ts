import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    message: string = "Hello from Data Service!";

    sayHello(): string {
        return "Hello Everyone!";
    }

}
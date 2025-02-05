import { Component } from '@angular/core';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DataService]
})
export class HomeComponent {

  msg: string = "";

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.msg = this._dataService.sayHello();
  }

}

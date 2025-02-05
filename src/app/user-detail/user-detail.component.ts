import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  user: any = { id: 0, name: "", email: "" }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => console.log(params['id'], params['name'], params['email']))
    this.route.params.subscribe(params => {
      this.user.id = params['id'];
      this.user.name = params['name'];
      this.user.email = params['email'];
      console.log(this.user);
    })
  }

}

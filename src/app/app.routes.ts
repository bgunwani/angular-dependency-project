import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

// Configuring Routes Here
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user-detail/:id/:name/:email', component: UserDetailComponent }
    // { path: 'user-detail', component: UserDetailComponent } // No Need when params are passed with queryParams
];

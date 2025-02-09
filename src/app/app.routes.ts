import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MoviesComponent } from './component/movies/movies.component';
import { SeriesComponent } from './component/series/series.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    {path:"", component: HomeComponent , title:"Home Page"},
    {path:"home", redirectTo:"" , pathMatch:"full"},
    {path:"movie", component: MoviesComponent , title:"Movies Page"},
    {path:"series", component: SeriesComponent , title:"Series Page"},
    {path:"login", component: LoginComponent , title:"Login Page"},
    {path:"signup", component: SignupComponent , title:"Signup Page"},
    {path:"**", component: NotFoundComponent, title: '404 Page'}
];

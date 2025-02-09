import { Component, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movie.interface';
import { MovieService } from '../../services/Movies/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  imgUrl ='https://image.tmdb.org/t/p/w500/'
  movies!:Movies[]
  constructor(private movieService:MovieService){}


displayMovies(){
    this.movieService.getMovies('movie').subscribe({
      next:(res)=>{
        console.log(res.results)
        this.movies=res.results ;
      }
    })
}

ngOnInit(): void {
  this.displayMovies()
}

}

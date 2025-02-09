import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movies } from '../../core/interfaces/movie.interface';
import { MovieService } from '../../services/Movies/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private series: MovieService) {}
  allSeries!: Movies[];
  imgUrl = 'https://www.themoviedb.org/movie/top-rated';

  displaySeries() {
    this.series.getMovies('tv').subscribe({
      next: (res) => {
        this.allSeries = res.results;
        console.log(res.results);
      },
    });
  }
  ngOnInit(): void {
    this.displaySeries();
  }
}

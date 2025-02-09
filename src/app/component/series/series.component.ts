import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/Movies/movie.service';
import { Movies } from '../../core/interfaces/movie.interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit {
  constructor(private series: MovieService) {}
  allSeries!: Movies[];
  imgUrl = 'https://image.tmdb.org/t/p/w500/';

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

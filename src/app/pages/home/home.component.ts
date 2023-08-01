import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroes$: Hero[] = [];

  ngOnInit(): void {}

  dataSearched(data: Hero[]) {
    this.heroes$ = data;
  }

  clearSearch() {
    this.heroes$ = [];
  }
}

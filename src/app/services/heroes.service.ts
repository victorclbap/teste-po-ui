import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private readonly http: HttpClient) {}

  private readonly endpoint = 'consultarapida';

  getHeros(): Observable<Hero[]> {
    return this.http
      .get<{ heros: Hero[] }>(`${environment.apiURL}/${this.endpoint}`)
      .pipe(map((res) => res.heros));
  }
}

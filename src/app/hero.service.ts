import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from "./hero";
import { HEROES } from './mock-heroes';

import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: Fetched Hero with id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("HeroService: Fetched Heroes");
    return of(HEROES);
  }
}

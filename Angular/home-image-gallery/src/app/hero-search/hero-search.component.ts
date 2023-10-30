import { Component, EventEmitter, Output } from '@angular/core';
import mockData from '../../../mock-data/mock-data.json';
import { Character } from '../models/character.model';
import { HeroSearchService } from '../hero-search.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  @Output() emitSearchResult = new EventEmitter<Character[]>();

  constructor(private heroSearchService: HeroSearchService) { }
  
  search = (input: string): any => {
    this.emitSearchResult.emit(this.heroSearchService.searchHero(input));
  }
}

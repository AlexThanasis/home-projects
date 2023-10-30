import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import mockData from '../../mock-data/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService  {
  characters: Character[] = [];
  
  constructor() { }

  getCharacters = (): Character[] => {
    return mockData.characters;
  }
  
  searchHero = (searchString: string): Character[] => {
    return mockData.characters.filter(hero => hero.name.toLowerCase().includes(searchString.toLowerCase().trim()));
  }
}

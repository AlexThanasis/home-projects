import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import mockData from '../../../mock-data/mock-data.json';
import { HeroSearchService } from '../hero-search.service';

@Component({
  selector: 'app-hero-image-gallery',
  templateUrl: './hero-image-gallery.component.html',
  styleUrls: ['./hero-image-gallery.component.css']
})
export class HeroImageGalleryComponent implements OnInit {
  characters: Character[] = [];
  
  constructor(private heroSearchService: HeroSearchService) {}

  ngOnInit(): void {
    this.characters = this.getCharacters();
  }
  
  getCharacters = (): Character[] => {
    return this.heroSearchService.getCharacters();
  }

  setCharacters = (filteredCharacters: Character[]): void => {
    this.characters = filteredCharacters;
  }
}

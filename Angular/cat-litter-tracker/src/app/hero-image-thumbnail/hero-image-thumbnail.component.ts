import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image-thumbnail',
  templateUrl: './hero-image-thumbnail.component.html',
  styleUrls: ['./hero-image-thumbnail.component.css']
})
export class HeroImageThumbnailComponent implements OnInit {
  @Input() name = '';
  @Input() imageUrl = '';
  
  ngOnInit(): void {
    
  }

}

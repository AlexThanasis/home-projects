import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarDay } from '../models/CalendarDay';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() day: CalendarDay = { date: new Date(), class: new Array<string>(), isSelected: false };
  @Input() dateSelectorMode: boolean = false;
  @Output() selectedDateEmitter = new EventEmitter<CalendarDay>();
  
  ngOnInit(): void { }

  selectDate = (): void => {
    if (this.dateSelectorMode) {
      this.day.isSelected = !this.day.isSelected;
      this.selectedDateEmitter.emit(this.day);
    }
  }

  setClassCustom = (): string[] => {
    if (this.day.class.includes('future')) {
      this.dateSelectorMode 
      ? this.day.class.push('date-selector-mode') 
      : this.day.class = [...this.day.class.filter((c) => c !== 'date-selector-mode')] ;
    } 

    if (this.day.isSelected && !this.day.class.includes('is-selected')) { // add
      this.day.class.push('is-selected');
    }
    if (!this.day.isSelected && this.day.class.includes('is-selected')){ // remove
      this.day.class = [...this.day.class.filter(c => c !== 'is-selected')];
    } 
    
    return [...new Set(this.day.class)];
  }
}

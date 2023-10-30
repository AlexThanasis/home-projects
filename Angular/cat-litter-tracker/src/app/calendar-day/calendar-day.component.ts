import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() day = new Date();
  isPast = false;
  isToday = false;
  private dayInMillisec: number = 24 * 60 * 60 * 1000;
  
  ngOnInit(): void {
    this.isPast = this.isInPast();
    this.isToday = this.isItToday();
  }
  
  isInPast = (): boolean => {
    const today = new Date();
    return (today.getTime() - this.dayInMillisec)  > this.day.getTime();
  }

  isItToday = (): boolean => {
    const today = new Date();
    return today.getMonth() === this.day.getMonth() && today.getDate() === this.day.getDate();
  }
}

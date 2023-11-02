import { Component, OnInit } from '@angular/core';
import { CalendarDay } from '../models/CalendarDay';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private dayInMillisec: number = 24 * 60 * 60 * 1000;
  private weeksShouldBeDisplayed: number = 5;
  isDateSelectorMode: boolean = false;
  today: CalendarDay = { date: new Date(), class: [], isSelected: false };
  litterPeriod: number = 7; // default stance is a litter must be changed in 7 days (week)
  displayedDates: CalendarDay[] = [];
  selectedDay: CalendarDay | undefined = undefined;
  datesForChangingLitter: CalendarDay[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      // setTimeout is only for demo purpose to show Loader component 👈
      this.datesForChangingLitter = this.getDatesForChangingLitter();
      this.createCalendar();
      
      }, 200);
  }

  createCalendar = (): void => {
    // get first day of last week
    let tempDate = this.today.date.getTime() - (7 + this.getDayCustom(this.today.date.getDay())) * this.dayInMillisec;
    
    // get the dates for next weeks
    for (let i = 0; i < this.weeksShouldBeDisplayed * 7; i++) {
      const date = new Date(tempDate);
      this.displayedDates.push({date: date, class: this.setClassForDate(tempDate), isSelected: this.setIsSelected(date)});
      tempDate += this.dayInMillisec;
    }
  }

  getDatesForChangingLitter = (): CalendarDay[] => {
    const datesForChangingLitterString = localStorage.getItem('datesForChangingLitter') ?? '[]';
    const dates: CalendarDay[] =  JSON.parse(datesForChangingLitterString).map((d: CalendarDay) => { 
      return { date: new Date(d.date), class: d.class, isSelected: d.isSelected };
    }).filter((d: CalendarDay) => d.isSelected);
    return dates;
  }

  onActivateDateSelectorMode(mode: boolean): void {
    this.isDateSelectorMode = mode;
  }

  onAddSelectedDate = (date: CalendarDay): void => {
    if (!this.isDateSelectorMode) {
      return;
    }
    
    if (this.datesForChangingLitter && this.datesForChangingLitter.some(d => this.dateComparer(d.date, date.date))) {
      this.datesForChangingLitter = [...this.datesForChangingLitter.filter(d => d.isSelected && !this.dateComparer(d.date, date.date))];
    }


    this.datesForChangingLitter.push(date);
    console.log("OnAdd: ", this.datesForChangingLitter);
    
    localStorage.setItem('datesForChangingLitter', JSON.stringify(this.datesForChangingLitter));
  }

  private setDate = (date: Date): 'past' | 'today' | 'future' => {
    const today = new Date();
    let result: 'past' | 'today' | 'future' = 'past';
   
    if (this.dateComparer(today, date)) {
      result = 'today';
    }
    
    if (today.getFullYear() < date.getFullYear() 
      || today.getFullYear() === date.getFullYear() && today.getMonth() < date.getMonth() 
      || today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() < date.getDate()) {
      result = 'future';
    }

    return result;
  }

  private getDayCustom = (day: number): number => {
    return (day + 6) % 7;
  }

  private setIsSelected = (date: Date): boolean => {
    return this.datesForChangingLitter.some(d => this.dateComparer(d.date, date));
  }

  private setClassForDate = (datetime: number): string[] => {
    const date = new Date(datetime);
    const classes: string[] = [this.setDate(date)];
    return [...new Set(classes)];
  }

  private dateComparer = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate();
  }
}

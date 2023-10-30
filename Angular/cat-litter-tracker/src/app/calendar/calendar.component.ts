import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private dayInMillisec: number = 24 * 60 * 60 * 1000;
  today: Date = new Date();
  weeksShouldBeDisplayed = 5;
  displayedDates: Date[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.createCalendar();
      console.log(7 + this.today.getDay());
      }, 500);
  }

  createCalendar = () => {
    // get first day of last week
    let tempDate = this.today.getTime() - (7 + this.getDayCustom(this.today.getDay())) * this.dayInMillisec;
    
    // get the dates for next weeks
    for (let i = 0; i < this.weeksShouldBeDisplayed * 7; i++) {
      this.displayedDates.push(new Date(tempDate));
      tempDate += this.dayInMillisec;
    }

    this.displayedDates.forEach(d => {console.log(d)})
  }

  private getDayCustom = (day: number): number => {
    return (day + 6) % 7;
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() toggleTimer: boolean = false;
  counter = {minutes: 0, seconds: 0};
  timer: number | undefined = undefined;
  
  ngOnInit(): void {
    this.counter = {minutes: 0, seconds: 0};
    this.timer = window.setInterval(() => {
      this.onCount();
    }, 1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
  }

  onCount = () => {
    if (this.toggleTimer) {
      this.counter.seconds++;
    } else {
      window.clearInterval(this.timer);
    }
  }

  displayTimeCounter = (): string => {
    return `${Math.floor(this.counter.seconds / 60)}: ${Math.round(this.counter.seconds % 60) < 10 ? '0' : ''}${Math.round(this.counter.seconds % 60)}`;
  }
  
}

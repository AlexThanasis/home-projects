import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../state/litter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }
}

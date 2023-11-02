import { Component, OnInit } from '@angular/core';
// import { LitterService } from '../litter.service';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../state/litter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-litter-measurement',
  templateUrl: './litter-measurement.component.html',
  styleUrls: ['./litter-measurement.component.css']
})
export class LitterMeasurementComponent implements OnInit {
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

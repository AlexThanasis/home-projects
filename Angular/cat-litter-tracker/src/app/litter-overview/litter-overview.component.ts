import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litter-overview',
  templateUrl: './litter-overview.component.html',
  styleUrls: ['./litter-overview.component.css']
})
export class LitterOverviewComponent implements OnInit {
  amountAvailable: number = 0;
  amountShouldBeBought: number = 0;
  weeksToBeWatched = 2;
  bagsOfLitterConsumedPerChange = 1;

  ngOnInit(): void {
    this.amountAvailable = this.getAmountAvailable();
    this.amountShouldBeBought = this.getAmountShouldBeBought(this.amountAvailable);
  }

  getAmountAvailable = (): number => {
    const amount = localStorage.getItem("amountOfLitterBags");
    return amount ? +amount : 0;
  }

  getAmountShouldBeBought = (amountAvailable: number): number => {
    return amountAvailable >= this.bagsOfLitterConsumedPerChange * this.weeksToBeWatched ? 0 : this.bagsOfLitterConsumedPerChange * this.weeksToBeWatched - amountAvailable; 
  }
}

import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LitterService implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log("LitterService");
    
    document.cookie = `amountOfLitterBags=10;`;
  }

  getAmountOfBags = (): number => {
    let cookie = document.cookie;
    let amount = cookie.split(';')[0].split('=')[1];
    console.log("cookie: ");
    console.log(cookie);
    if (!amount) {
      document.cookie = `amountOfLitterBags=0`;
      amount = '0';
    }
    console.log("amount: ");
    console.log(amount);
    return +amount;
  }

  setAmountOfBags(delta: number): void {
    let cookie = document.cookie;
    let amount = cookie.split(';')[0].split('=')[1];
    
    document.cookie = `amountOfLitterBags=${amount + delta}`;
  }
}

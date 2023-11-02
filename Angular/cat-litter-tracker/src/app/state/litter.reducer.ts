import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './litter.actions';
import { CalendarDay } from '../models/CalendarDay';

const getInitialAmount = (): number => {
  let amount = localStorage.getItem("amountOfLitterBags") ? Number(localStorage.getItem("amountOfLitterBags")) : 0;
  let lastDate = localStorage.getItem("lastDate") ? new Date(localStorage.getItem("lastDate") ?? 0) : new Date(); 
  let datesForChangingLitter = localStorage.getItem("datesForChangingLitter") ? JSON.parse(localStorage.getItem("datesForChangingLitter") ?? '') : [];
  const today = new Date();

  if (
    (today.getFullYear !== lastDate.getFullYear // 1st step: check was the last visit today?
      || today.getMonth() !== lastDate.getMonth() 
      || today.getDate() !== lastDate.getDate())
    && (datesForChangingLitter && // 2nd step: check is today a litter changing day?
      datesForChangingLitter.some((litterDate: CalendarDay) => {
        const date = new Date(litterDate.date);
        return date.getFullYear() === today.getFullYear()
          && date.getMonth() === today.getMonth()
          && date.getDate() === today.getDate();
      }))
    ) {
    amount -= 1;
  }

  // last visit date is now today 👉 update lastDate for today
  localStorage.setItem("lastDate", `${new Date()}`);
  return +amount;
}

export const initialState = getInitialAmount();

export const litterReducer = createReducer(initialState,
  on(increment, state => {
    localStorage.setItem("amountOfLitterBags", `${state + 1}`);
    return state + 1;
  }),
  on(decrement, state => {
    localStorage.setItem("amountOfLitterBags", `${state - 1}`);
    return state > 0 ? state - 1 : 0;
  }),
  on(reset, state => 0),
);
import { createActionGroup, props, Action } from '@ngrx/store';

// export enum LitterActionTypes {
//     Increment = '[Litter] Increment',
//     Decrement = '[Litter] Decrement',
//     Reset = '[Litter] Reset'
// }

// export class LitterIncrement implements Action {
//     readonly type = LitterActionTypes.Increment;
// }

// export class LitterDecrement implements Action {
//     readonly type = LitterActionTypes.Decrement;
// }

// export class LitterReset implements Action {
//     readonly type = LitterActionTypes.Reset;
// }

// export type LitterActions = LitterIncrement | LitterDecrement | LitterReset;

import { createAction } from '@ngrx/store';

export const increment = createAction('[Litter] Increment');
export const decrement = createAction('[Litter] Decrement');
export const reset = createAction('[Litter] Reset');

// export const LitterActions = createActionGroup({
//     source: 'Litter',
//     events: {
//         'Add Litter Bag': props<{ deltaOfBag: number }>(),
//     },
// });

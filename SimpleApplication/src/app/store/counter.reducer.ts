
import {createReducer, on} from '@ngrx/store';
import { decrement, increment } from './counter.action';


export const initialState = 1;

export const counterReduce = createReducer(
    initialState,
    on(increment, (state)=> state +1),
    on(decrement, (state)=> state -1)
)
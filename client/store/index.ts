import {legacy_createStore as createStore, applyMiddleware, AnyAction, Store} from 'redux';
import {createWrapper, Context,} from 'next-redux-wrapper';
import { RootState, reducer } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk'

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextDispatchThunk = ThunkDispatch<RootState, void, AnyAction>
import { combineReducers } from '@reduxjs/toolkit';
import apiReducer from './reducer/iconsReducer';

export const rootReducer = combineReducers({
    Api: apiReducer,
})

export type rootState = ReturnType<typeof rootReducer>
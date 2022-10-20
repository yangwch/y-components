import React, { Context, createContext } from 'react';

export interface RowContextState {
  gutter?: [number, number];
}

export const RowContext: Context<RowContextState> = createContext<RowContextState>({});

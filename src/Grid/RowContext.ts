import React, { Context, createContext } from 'react';

export interface RowContextState {
  gutter?: [number, number];
  wrap?: boolean;
}

export const RowContext: Context<RowContextState> = createContext<RowContextState>({});

import React from 'react';

interface SubMenuContextValue {
  depth: number;
}

export const SubMenuContext = React.createContext<SubMenuContextValue>({
  depth: 1,
});

import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement; // required
  color?: string; // optional
}

export const AtomExample = ({ children, color }: Props) => {
  return <div style={{ color }}>{children}</div>;
};

import React from 'react';

import { AtomExample } from '@/components/ui';

interface Props {
  backgroundColor?: string; // optional
}

export const MoleculeExample = ({ backgroundColor }: Props) => {
  return (
    <div style={{ backgroundColor }}>
      <AtomExample>
        <>Some content</>
      </AtomExample>
    </div>
  );
};

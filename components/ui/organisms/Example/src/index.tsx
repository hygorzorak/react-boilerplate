import React from 'react';

import { AtomExample, MoleculeExample } from '@/components/ui';

export const OrganismExample = () => {
  return (
    <>
      <MoleculeExample />
      <AtomExample>
        <>Some content</>
      </AtomExample>
    </>
  );
};

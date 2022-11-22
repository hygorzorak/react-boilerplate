import React from 'react';

import { AtomExample, MoleculeExample, OrganismExample } from '@/components/ui';

export const TemplateExample = () => {
  return (
    <>
      <OrganismExample />
      <MoleculeExample />
      <AtomExample>
        <>Some content</>
      </AtomExample>
      <MoleculeExample />
    </>
  );
};

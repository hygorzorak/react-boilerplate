# Components UI

Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for crafting design systems with some fundamental building blocks, which, when combined, promote consistency, modularity, and scalability.

## Pattern structure:

- **Atoms:** Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

- **Molecules:** Grouping atoms together, such as combining a button, input and form label to build functionality.

- **Organisms:** Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

- **Templates:** Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

## Folder structure:
``` 
- ui
    - atoms
        - AtomName
            - src
                index.tsx
            - test
                AtomName.test.tsx
            index.ts
        index.ts
    - molecules (can use atoms)
        - MoleculeName
            - src
                - elements (can use atoms)
                    SomeComponent.tsx
                    ...
                index.tsx
            - test
                MoleculeName.test.tsx
            index.ts
        index.ts
    - organisms (can use atoms and molecules)
        - OrganismName
            - src
                - elements (can use atoms)
                    SomeComponent.tsx
                    ...
                index.tsx
            - test
                OrganismName.test.tsx
            index.ts
        index.ts
    - templates (can use atoms, molecules and organisms)
        - TemplateName
            - src
                - elements (can use atoms)
                    SomeComponent.tsx
                    ...
                index.tsx
            - test
                TemplateName.test.tsx
            index.ts
        index.ts
```
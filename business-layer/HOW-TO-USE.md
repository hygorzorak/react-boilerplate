# Business Layer

The business layer is intended to store and resolve more complex logic that should not be in the visualization layer (the UI components)

## Pattern structure:

- **Tactics:** Strategies and configurations that must be used within the context of the business layer itself. Must be shared only by Contracts.

- **Contracts:** Logic and API integrations that use defined Tactics. It is also the sharing channel for Tactics that should be exposed.

- **Hooks:** Facades hooks and integration hooks that solve general and diverse functionalities, not being limited to a specific context.
    - **Facades:** Miscellaneous functionality in the React and JavaScript domain. Example: useWindowSize.tsx
    - **Integration:** Integrations with various services. Example: useFullstory.tsx

## Folder structure:
``` 
- business-layer
    - contracts
        - some-domain
            index.tsx
            mutations.ts
            queries.tsx
        ...
        index.ts
    - hooks
        - facades
            useWindowSize.tsx
            ...
            index.ts
        - integration
            useFullstory.tsx
            ...
            index.ts
        index.ts
    - tactics
        - rq-hooks
            index.ts
            mutations.ts
            queries.ts
        - rq-keys
            - some-domain
                mutations.ts
                queries.ts
            mutations.ts
            queries.ts
        ...
        index.ts
```
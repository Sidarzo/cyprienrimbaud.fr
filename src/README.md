# Organisation du Projet Next.js

## Structure des Dossiers

```
src/
├── app/                    # App Router Next.js 13+
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── favicon.ico        # Favicon
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   └── index.ts
│   └── layout/           # Composants de mise en page
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── index.ts
├── lib/                  # Utilitaires et configurations
│   └── utils.ts
├── hooks/                # Hooks React personnalisés
│   └── useLocalStorage.ts
├── types/                # Types TypeScript
│   └── index.ts
└── constants/            # Constantes et configurations
    └── index.ts
```

## Conventions de Nommage

### Composants
- **PascalCase** pour les noms de composants : `Button.tsx`, `Header.tsx`
- **index.ts** pour les exports groupés
- Préfixes pour les types de composants :
  - `ui/` : Composants UI réutilisables
  - `layout/` : Composants de mise en page
  - `features/` : Composants spécifiques aux fonctionnalités

### Fichiers
- **camelCase** pour les utilitaires : `utils.ts`, `constants.ts`
- **kebab-case** pour les pages : `about-us/page.tsx`

## Bonnes Pratiques

### 1. Organisation des Composants
```typescript
// ✅ Bon : Export nommé avec interface
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant }: ButtonProps) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}

// ✅ Bon : Export groupé
export { default as Button } from './Button';
export { default as Input } from './Input';
```

### 2. Imports Organisés
```typescript
// 1. Imports React/Next.js
import React from 'react';
import Link from 'next/link';

// 2. Imports de composants
import { Button } from '@/components/ui';
import { Header, Footer } from '@/components/layout';

// 3. Imports d'utilitaires
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants';

// 4. Imports de types
import type { Project } from '@/types';
```

### 3. Structure des Pages
```typescript
// app/projets/page.tsx
import { Metadata } from 'next';
import { ProjectList } from '@/components/features/projects';

export const metadata: Metadata = {
  title: 'Projets | Cyprien Rimbaud',
  description: 'Découvrez mes projets de développement web'
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1>Mes Projets</h1>
      <ProjectList />
    </div>
  );
}
```

## Configuration TypeScript

Utilisez des alias pour simplifier les imports :

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

## Gestion des Styles

- **Tailwind CSS** pour les styles utilitaires
- **CSS Modules** pour les styles spécifiques aux composants
- **Variables CSS** pour les thèmes et couleurs

## Performance

- **Lazy Loading** pour les composants lourds
- **Memoization** avec `React.memo()` et `useMemo()`
- **Code Splitting** automatique avec Next.js 
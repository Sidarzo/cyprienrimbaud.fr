# 🏗️ Organisation du Projet Next.js

## 📁 Structure des Dossiers

```
cyprienrimbaud.fr/
├── src/
│   ├── app/                    # App Router Next.js 13+
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── projets/           # Route /projets
│   │   │   └── page.tsx       # Page des projets
│   │   ├── globals.css        # Styles globaux
│   │   └── favicon.ico        # Favicon
│   ├── components/            # Composants React
│   │   ├── ui/               # Composants UI réutilisables
│   │   │   ├── Button.tsx    # Bouton personnalisé
│   │   │   └── index.ts      # Exports groupés
│   │   ├── layout/           # Composants de mise en page
│   │   │   ├── Header.tsx    # En-tête du site
│   │   │   ├── Footer.tsx    # Pied de page
│   │   │   └── index.ts      # Exports groupés
│   │   └── features/         # Composants spécifiques aux fonctionnalités
│   │       ├── ProjectCard.tsx # Carte de projet
│   │       └── index.ts      # Exports groupés
│   ├── lib/                  # Utilitaires et configurations
│   │   └── utils.ts          # Fonctions utilitaires
│   ├── hooks/                # Hooks React personnalisés
│   │   └── useLocalStorage.ts # Hook pour localStorage
│   ├── types/                # Types TypeScript
│   │   └── index.ts          # Interfaces et types
│   ├── constants/            # Constantes et configurations
│   │   └── index.ts          # Configuration du site
│   └── README.md             # Documentation de l'organisation
├── public/                   # Fichiers statiques
├── package.json
├── tsconfig.json
└── ORGANISATION.md           # Ce fichier
```

## 🎯 Principes d'Organisation

### 1. **Séparation des Responsabilités**
- **`components/ui/`** : Composants réutilisables (Button, Input, Modal...)
- **`components/layout/`** : Composants de structure (Header, Footer, Sidebar...)
- **`components/features/`** : Composants spécifiques aux fonctionnalités

### 2. **Imports Organisés**
```typescript
// 1. Imports React/Next.js
import React from 'react';
import Link from 'next/link';

// 2. Imports de composants
import { Button } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { ProjectCard } from '@/components/features';

// 3. Imports d'utilitaires
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants';

// 4. Imports de types
import type { Project } from '@/types';
```

### 3. **Conventions de Nommage**
- **Composants** : PascalCase (`Button.tsx`, `ProjectCard.tsx`)
- **Fichiers utilitaires** : camelCase (`utils.ts`, `constants.ts`)
- **Pages** : kebab-case (`about-us/page.tsx`)
- **Exports groupés** : `index.ts` dans chaque dossier

## 🚀 Bonnes Pratiques

### Composants
```typescript
// ✅ Bon : Interface TypeScript + export par défaut
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}: ButtonProps) {
  // Logique du composant
}
```

### Pages
```typescript
// ✅ Bon : Metadata + structure claire
import { Metadata } from 'next';
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: 'Projets | Cyprien Rimbaud',
  description: 'Découvrez mes projets de développement web'
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Contenu de la page */}
      </main>
      <Footer />
    </div>
  );
}
```

### Types
```typescript
// ✅ Bon : Types centralisés et réutilisables
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}
```

## 🔧 Configuration

### TypeScript (tsconfig.json)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Alias d'Imports
- `@/components/*` → `src/components/*`
- `@/lib/*` → `src/lib/*`
- `@/types/*` → `src/types/*`
- `@/constants/*` → `src/constants/*`

## 📈 Évolutivité

### Ajouter un Nouveau Composant UI
1. Créer `src/components/ui/NewComponent.tsx`
2. Ajouter l'export dans `src/components/ui/index.ts`
3. Importer avec `import { NewComponent } from '@/components/ui'`

### Ajouter une Nouvelle Page
1. Créer `src/app/nouvelle-page/page.tsx`
2. Ajouter les métadonnées
3. Utiliser les composants existants

### Ajouter un Nouveau Hook
1. Créer `src/hooks/useNewHook.ts`
2. Exporter la fonction
3. Importer avec `import { useNewHook } from '@/hooks/useNewHook'`

## 🎨 Styles

- **Tailwind CSS** pour les styles utilitaires
- **CSS Modules** pour les styles spécifiques
- **Variables CSS** pour les thèmes
- **Classes conditionnelles** avec `cn()` utility

## ⚡ Performance

- **Lazy Loading** pour les composants lourds
- **Memoization** avec `React.memo()` et `useMemo()`
- **Code Splitting** automatique avec Next.js
- **Images optimisées** avec `next/image`

---

Cette organisation vous permet de maintenir un code propre, scalable et facile à maintenir ! 🎉 
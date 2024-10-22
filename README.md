# FileHub

Transfer with confidence, share with ease.

## Getting Started

This project contains the backend and the frontend.

### Prerequisites

- Docker
- Node.js
- npm

### Starting the Server and Database

Run this command at the root of the project to start the server and database:

```
docker compose up --build
```

### Starting the Frontend

```
npm run dev
```

### Launching backend integration tests with jest :

- Open a terminal, position yourself at the parent folder of the project and run the command: docker compose up db
- Open a second terminal, position yourself in the 'tests' folder and run the command: npx jest resolverUser.spec.ts --watch

#### Lauching backend unitary test timestamp with jest :

- Open terminal, position yourself in the 'tests' folder and run the command: npx jest timestamp.spec.ts

#### Contributing

Before pushing a pull request, always ensure that you've checked for linting and test to maintain code quality.

```
npm run lint
```

```
npm run prettier
```

```
npm run type
```

```
npm run test
```

or

```
npm run check
```

## Sujets à améliorer :

- Intégrer un composant card
- Intégrer un composant button
- Améliorer le flux et le wording pour la feature de reset password
- Mettre en place un design pour les emails

## Prochaines features :

- Mettre en place des traductions
- Mettre en place Stripe

## En cours :

- Créer un composant layout pour remplacer le composant FileInfo dans FileUpload.tsx
- Implémenter ce composant dans les pages suivantes :
  - Mes fichiers
  - Ajouter un fichier
  - Votre fichier est à portée de clic
  - Info perso

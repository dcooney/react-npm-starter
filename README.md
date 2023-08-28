# React NPM Starter

A starter project for publishing [npm](https://www.npmjs.com/) packages with React and Typescript.

Publishing packages on npm can be time consuming and confusing. This starter is intended to help streamline package development by bundling everything you need to publish packages into a single resource.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [TailwindCSS](https://tailwindcss.com/) for rapid development. [Microbundle](https://github.com/developit/microbundle) is used for code bundling prior to distribution on npm.

## Getting Started

### Installation

Clone the repo to your local environment.

```bash
git clone https://github.com/dcooney/react-npm-starter.git
```

Install the project dependencies.

```bash
npm install
# or
yarn install
```

Start the local development server.

```bash
npm run start
# or
yarn run start
```

### Package Naming

The first thing you need to do is to choose a **unique** name for the package.

Go to the [NPM registry](https://www.npmjs.com/) and run a search. Be sure there isn't an exact match to the name you are intending to use or you will need to do one of the following:

1. Select a different name for the component.
2. Publish as a [Scoped Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

### Creating Package

After the project setup is complete and you've selected a package name, it's time to start developing the package.

#### Example Component

Locate the `Example.tsx` component found in `src/lib` directory of the project. This is the component we are intending to distribute on npm, happens to be a simple HTML button component.

You can go ahead and either rename or create a new component. Either way, this will be the main component for distribution so go add your logic to this file entry point.

#### Test Component Functionality

Locate the `App.tsx` component found in `src` directory of the project. This is the file used for testing the functionality of our distributed package.

You will notice that in `App.tsx` we are importing the `Example` component and passing various props to the component. Use this as an examplar for testing.

#### Package.json

The next step is to update the project config found in `package.json` to reference your specific project.

It's recommended that you change the following fields:

|         Field  | Description                               |
|--------------: |------------------------------------------ |
| `name`         | The name of the package.                  |
| `version`      | The package version.                      |
| `description`  | Short description of the package.         |
| `main`         | The primary entry point to the package.   |
| `types`        | Path to compiled TypeScript definitions.  |
| `author`       | Package author.                           |
| `keywords`     | Help people discover the package.         |
| `repository`   | The GIT repository where the code lives.  |
| `bugs`         | URL to the project's issue tracker.       |

## Publish Package to NPM

Publishing your public or private package is as easy as running the `npm publish` command, however, before you can do so you'll need to sign up for an npm account.

Here are a few links to read through before publishing your package.

- [Unscoped Public Package](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Scoped Public Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Private Package](https://docs.npmjs.com/creating-and-publishing-private-packages)

## Available Scripts

From the project directory, you can run following scripts with `yarn` or `npm`:

| Script                | Usage                                                                                                                          |
|---------------------- |------------------------------------------------------------------------------------------------------------------------------- |
| `npm run start`       | Runs the demo app in the development mode at [http://localhost:3000](http://localhost:3000).      |
| `npm run build`       | Builds a production version of the package to the `dist` folder using [Microbundle](https://github.com/developit/microbundle).  |
| `npm run build:docs`  | Builds the demo app to the `docs` folder for deployment to [Github Pages](https://pages.github.com/).      |

## Helpful Links

- [Component Testing](https://github.com/dcooney/react-npm-starter/wiki/Testing)

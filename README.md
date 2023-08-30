# React NPM Starter

A starter project for publishing [npm](https://www.npmjs.com/) packages with React and Typescript.

Publishing packages on npm can  be time-consuming and confusing. This starter is intended to help streamline package development by bundling the dependencies you need to start publishing packages into a single resource.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Tailwind CSS](https://tailwindcss.com/) for rapid development. [Microbundle](https://github.com/developit/microbundle) is used for code bundling prior to distribution on npm.

## Installation

Clone the repo to your local environment.

```bash
git clone https://github.com/dcooney/react-npm-starter.git
```

Install the project dependencies with `npm` or `yarn`.

```bash
npm install
```

Start the local development server.

```bash
npm run start
```

## Available Scripts

From the project directory, you can run the following scripts with `npm` or `yarn`:

| Script                | Usage                                                                                                                          |
|---------------------- |------------------------------------------------------------------------------------------------------------------------------- |
| `npm run start`       | Runs the demo app in development mode @ [http://localhost:3000](http://localhost:3000).      |
| `npm run build`       | Builds a production version of the package to the `dist` folder with [Microbundle](https://github.com/developit/microbundle).  |
| `npm run build:docs`  | Builds the demo app to the `docs` folder for deployment to [Github Pages](https://pages.github.com/).      |

## Getting Started

After the project setup is complete, it's time to select a package name and start developing the package.

### Package Naming

The first thing you to do is to choose a **unique** name for the package.

Go to the [NPM registry](https://www.npmjs.com/) and run a search. Be sure there isn't an exact match to the name you intend to use or you will need to do one of the following:

1. Select a different name for the component.
2. Publish as a [Scoped Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

### Example Component

In the `src/lib` directory of the project is an example component. This is the component we intend to distribute on npm, which happens to be a simple HTML button component.

You can rename this component or create an entirely new component. Either way, this will be the main component for distribution so add your logic to this file entry point in the `src/lib` directory.

### Component Functionality

Locate the `App.tsx` component found in the root of the `src` directory. This is the file we are using for testing the functionality of the distributed package.

You will notice that we are importing the `Example` component and passing various props to the component.

Use this as the package demo and import your component/package into this file for testing.

### Package.json

The next step is to update the project config found in `package.json` to reference your specific project.

It's recommended that you change the following fields:

|         Field  | Description                               |
|--------------: |------------------------------------------ |
| `name`         | The name of the package.                  |
| `version`      | The package version.                      |
| `description`  | Short description of the package.         |
| `source`       | Path to the primary entry point of the package.   |
| `types`        | Path to compiled TypeScript definitions.  |
| `author`       | Package author.                           |
| `keywords`     | Help people discover the package.         |
| `repository`   | GIT repository where the code lives.  |
| `bugs`         | URL to the project's issue tracker.       |

## Publish Package to NPM

Publishing your public or private package is as easy as running the `npm publish` command, however, before you can do so you'll need to sign up for an npm account.

Here are a few links to read through before publishing your package.

- [Unscoped Public Package](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Scoped Public Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Private Package](https://docs.npmjs.com/creating-and-publishing-private-packages)

## Helpful Links

- [Component Testing](https://github.com/dcooney/react-npm-starter/wiki/Testing)

## Contributing

1. Fork this repository.
2. Create your branch: git checkout -b my-new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin my-new-feature.

After your pull request is merged, you can safely delete your branch.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dcooney/react-npm-starter/blob/main/LICENSE) file for more information.

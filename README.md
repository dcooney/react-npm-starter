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

The first thing you need to do is to choose a name for the package. Your package needs to have a unique name and you should choose a name that has not been used already.

Go to the [NPM registry](https://www.npmjs.com/) and run a search. Be sure there isn't an exact match to the name you are intending to use or you will need to do one of the following:

1. Select a different name for the component.
2. Publish as a [Scoped Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

### Create Package

After the project setup is complete and you've selected your package name, it's time to start developing the package.

#### Example Component

Locate the `Example.tsx` component found in `src/lib` directory of the project. This is the component we are intending to distribute on npm which happens to be a simple HTML button.

You can rename or create a new component for your use. Either way, this will be the main component for distribution so go ahead an add your logic here.

#### Testing Component Functionality

Locate the `App.tsx` component found in `src` directory of the project. This is the file we can use for testing the functionality of our component.

You will notice that in `App.tsx` we are importing the `Example` component and passing various props to the component. You this as an examplar for your testing.

#### Package.json

The next step is to update the project details found in `package.json` to reference your specific project.

// TODO: Add details about which fields require editing.

#### Publish Package to NPM

Publishing your public or private package is as easy as running the `npm publish` command, however, before you can do so you'll need to sign up for an npm account.

Here are a few links to read through before publishing your package.

- [Unscoped Public Package](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Scoped Public Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Private Package](https://docs.npmjs.com/creating-and-publishing-private-packages)

## Available Scripts

From the project directory, you can run following script with `yarn` or `npm`:

| Script                | Usage                                                                                                                          |
|---------------------- |------------------------------------------------------------------------------------------------------------------------------- |
| `npm run start`       | Runs the demo app in the development mode at [http://localhost:3000](http://localhost:3000).      |
| `npm run build`       | Builds a production version of the package to the `dist` folder using [Microbundle](https://github.com/developit/microbundle).  |
| `npm run build:docs`  | Builds the demo app to the `docs` folder for deployment to [Github Pages](https://pages.github.com/).      |

## Testing

When developing a React package for distribution on npm, you must confirm that the package is compatible for use in other applications.

[NPM Link](https://docs.npmjs.com/cli/v9/commands/npm-link) creates a global symlink for a dependency. A symlink, short for symbolic link, is a shortcut that points to another directory or file on your system.

NPM Link allows for local development and testing of components without having to continuously rebuild and publish the dependent package.

### Alternative Testing

Another method of testing an npm package is to export the package as a Tarball(`.tgz`) and import it into another project as a dependency using [NPM Pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

This testing method provides the most realistic experience with regards to how a package will be installed and used in a real-world application.

#### Export Package

Run `npm pack` from the project root to create a `.tgz` export.

**Note**: The name of the exported file will be `<your-package-name>-<version>.tgz`

#### Install Package

Copy the generated `.tgz` file to the root of another project or create a new [CRA project](https://create-react-app.dev/docs/getting-started#quick-start) for testing purposes.

Open your terminal in the test project and run the following command to install the package as a dependency in `package.json`.

```bash
npm i file:<your-package-name>.tgz
```

⚠️ Notice the `file:` in the dependency path. It is critical that you reference the absolute path to the `.tgz` export.

After the package has been installed you can `import` the package into the app as you would any other npm package and begin testing.

```jsx
import Example from 'example-package'
```

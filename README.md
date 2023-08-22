# React NPM Starter

A starter project for publishing [NPM](https://www.npmjs.com/) packages with React and Typescript.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [TailwindCSS](https://tailwindcss.com/) for rapid development. [Microbundle](https://github.com/developit/microbundle) is used for code bundling prior to distribution on NPM.

## Getting Started

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

Start the local server.

```bash
npm run start
# or
yarn run start
```

## Available Scripts

From the project directory, you can run following script with `yarn` or `npm`:

| Script                | Usage                                                                                                                          |
|---------------------- |------------------------------------------------------------------------------------------------------------------------------- |
| `npm run start`       | Runs the demo app in the development mode at [http://localhost:3000](http://localhost:3000).      |
| `npm run build`       | Builds a production version of the package to the `dist` folder using [Microbundle](https://github.com/developit/microbundle).  |
| `npm run build:docs`  | Builds the demo app to the `docs` folder for deployment to [Github Pages](https://pages.github.com/).      |

## Development

The `src` directory contains the source for the demo application and the

## Testing

When developing a React package for distribution on NPM, you must confirm that the package is compatible for use in other applications.

[NPM Link](https://docs.npmjs.com/cli/v9/commands/npm-link) creates a global symlink for a dependency. A symlink, short for symbolic link, is a shortcut that points to another directory or file on your system.

NPM Link allows for local development and testing of components without having to continuously rebuild and publish the dependent package.

### Alternative Testing

Another method of testing an NPM package is to export the package as a Tarball(`.tgz`) and import it into another project as a dependency using [NPM Pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

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

## Publish Package to NPM

Publishing your public or private package is as easy as running the `npm publish` command, however, before you can do so you'll need to sign up for an npm account.

Here are a few links to read through before publishing your package.

- [Unscoped Public Package](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Scoped Public Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Private Package](https://docs.npmjs.com/creating-and-publishing-private-packages)

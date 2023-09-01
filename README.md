# React NPM Starter Project

A starter project (or boilerplate) for rapidly publishing [npm](https://www.npmjs.com/) packages with React and TypeScript.

This project is intended to help streamline individual package development by bundling the dependencies required to start publishing packages into a single resource.

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

From the project directory, you can run the following scripts with `npm` or `yarn`.

| Script                 |  Usage                                                                                                                          |
|----------------------: | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm run start`        | Starts the demo app in development mode @ [http://localhost:3000](http://localhost:3000).      |
| `npm run build`        | Builds a production version of the package to the `dist` directory with [Microbundle](https://github.com/developit/microbundle).  |
| `npm run build:docs`   | Builds the demo app to the `docs` directory for deployment to [Github Pages](<https://pages.github.c>

## Getting Started

After the initial project setup is complete and the local development server is up and running, it's time to choose a name and start developing the package.

**Note**: All package source files are located in the `src/lib` directory of the project.

### Package Naming

The first thing to do is to choose a **unique** name for the package.

Go to the [NPM registry](https://www.npmjs.com/) and run a search. Be sure there isn't an exact match to the name you intend to use or you will need to do one of the following:

1. Select a different name for the component.
2. Publish as a [Scoped Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

### Example Package

In the `src/lib` directory of the project is an `Example` component that is included with this starter. The `Example` component is a simple HTML button that is intended to be distributed as a package on npm.

Go ahead and rename this component or create an entirely new component. This will be the main component used for distribution, so add all the component logic and functionality to this entry point.

#### Local Testing

Testing your package locally involves importing the component directly into the demo application.

With the local development server running:

1. Open the `App.tsx` file found in the root of the `src` directory.
2. Import the component as you would any other React component.
3. Continue building out the package until the functionality is working as expected.

Read more about [Package Testing](#compiling) below.

### Package.json

Update the project config found in `package.json` to reference your project specifics.

At a minimum, you must update the following fields:

| Field          | Description                                |
|--------------: |:------------------------------------------ |
| `name`         | Name of the package.                       |
| `version`      | Package version.                           |
| `description`  | Short description of the package.          |
| `source`       | Path to the primary entry point of the package.   |
| `types`        | Path to compiled TypeScript definitions.   |
| `author`       | Package author.                            |
| `keywords`     | Help people discover the package.          |
| `repository`   | GIT repository where the code lives.       |
| `bugs`         | URL to the project issue tracker.          |

## Compiling

When you're ready to [test the package for distribution](https://github.com/dcooney/react-npm-starter/wiki/Testing), run `npm run build` to create a production version of the package with [Microbundle](https://github.com/developit/microbundle) to the `dist` directory. This will allow you to import the package into another project to begin testing the implementation.

&rarr; [Testing Wiki](https://github.com/dcooney/react-npm-starter/wiki/Testing)

**Note**: The `dist` directory is not committed to the GIT repo.

## Publish Package to NPM

Publishing your public or private package is as easy as running the `npm publish` command, however, before you can do so you'll need to sign up for an [npm account](https://www.npmjs.com/signup).

Here are a few links to read through before publishing your package.

- [Unscoped Public Package](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Scoped Public Package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Private Package](https://docs.npmjs.com/creating-and-publishing-private-packages)

## Helpful Links

- [Package Testing](https://github.com/dcooney/react-npm-starter/wiki/Testing)

## Contributing

1. Fork this repository.
2. Create your branch: git checkout -b my-new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin my-new-feature.

After your pull request is merged, you can safely delete your branch.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dcooney/react-npm-starter/blob/main/LICENSE) file for more information.

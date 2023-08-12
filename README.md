# React NPM Starter

A starter project for rapidly publishing [NPM](https://www.npmjs.com/) packages with React and Typescript.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [TailwindCSS](https://tailwindcss.com/) and uses [Microbundle](https://github.com/developit/microbundle) for code bundling prior to distribution on NPM.

## Getting Started

Clone the repo to your local environment.

`git clone https://github.com/dcooney/react-npm-starter.git`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the demo application in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This is how you will test and develop your NPM package/module before release.

The page will reload when you make changes.\ You may also see any lint errors in the console.

### `npm run build`

Builds a production export of your package to the `dist` folder using [Microbundle](https://github.com/developit/microbundle).

### `npm run build:docs`

Builds a production demo app and exports to the `docs` folder for deployment to [Github Pages](https://pages.github.com/).

### `npm run eject`

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. [More Details ➚](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)

## Project Directories

## Testing

During the development phase, testing the functionality of your NPM package is easy as your importing the package locally and fixing issues as they arise.

This works great for development, however it doesn't confirm the package will work as expect when being distrubuted via NPM.

To get around this:

1. Run `npm pack` from the project directory to create a tarball (.tgz) of the package.
2. Inside the project directory, create an `example` directory.

```
"dependencies": {
    "react-npm-starter": "file:./react-npm-starter-1.0.0.tgz"
},
```

## Publish Package to NPM

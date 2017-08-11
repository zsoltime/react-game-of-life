# React Game of Life

This is my "Game of Life" for Free Code Camp's [fourth React challenge](https://www.freecodecamp.org/challenges/build-the-game-of-life). Demo is available on [my site](https://zsolti.co/fcc/gol/).

## User Stories

- [ ] When I first arrive at the game, it will randomly generate a board and start playing.
- [ ] I can start and stop the board.
- [ ] I can set up the board.
- [ ] I can clear the board.
- [ ] When I press start, the game will play out.
- [ ] Each time the board changes, I can see how many generations have gone by.

## Tools Used

- [React.js library](https://facebook.github.io/react/)
- [Webpack module bundler](https://webpack.js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Karma](https://karma-runner.github.io) test runner
- [Mocha](https://mochajs.org/) test framework
- [Expect](https://github.com/mjackson/expect) assertion library

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer, or you can use `npm`.

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/react-markdown-previewer.git
cd react-markdown-previewer
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds production bundle, uglifies JS, minifies CSS - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Run unit tests

Run unit tests with Karma and Mocha

``` bash
yarn test
# OR
npm run test
```

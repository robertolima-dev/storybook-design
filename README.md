<h1 align="center">
  Storybook
</h1>

# IMPORTANT

- A pasta ./dist está comitada porque é a biblioteca de componentes (gerada por `npm run build`), idealmente nós fariamos um CI/CD e publicariamos essa pasta junto com o package.json via NPM ou similar
- Para usar os componentes em outros projetos: (pode pedir para autorizar)

```
npm i --save git+git@github.com:robertolima-dev/storybook-design.com.git#master
```

## How to run locally

```sh
npm install
npm run storybook
```

## Creating new components

After creating a new component, you must load it into `./index.tsx` in order to add it into the new version.

```ts
import { default as NewComponent } from './src/components/NewComponent'
```

## How gen new version (./dist)

Update `package.json` version number, then

```sh
npm run build
```

## Deploy to github.io

```
npm run deploy-sb
```
## Learning Storybook

1. Read our introductory tutorial over at [Storybook tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).

# Galoy React components and hooks

A React library for the Galoy stack. This is used in front-end applications like the web and mobile wallets.

## Installation

Install the package:

```bash
yarn add @galoymoney/react
```

## Test

Test with Jest framework:

```bash
yarn test
```

## Build

Build production (distribution) files in **dist** folder:

```bash
yarn build
```

## Local development

Run:

```bash
yarn link
```

and in your test project run:

```bash
yarn link @galoymoney/react
```

If you want to remove the symlink, run:

```bash
# in your test project
yarn unlink @galoymoney/react

# in galoymoney/react folder
yarn unlink
```

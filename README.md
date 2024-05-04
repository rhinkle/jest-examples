# Jest Examples

## Quick Start

- This uses `pnpm` as the package manager. You can install it by running `npm install -g pnpm`. To install the dependencies run `pnpm install`.
- NX Standalone is uses to manage this repo. Its a bit overkill but i wanted to try it out. [NX Link](https://nx.dev)

## Description

This repository contains examples of how to use Jest for testing Typescript React code. This is used as a reference for how to test different components and features in a React application.

## Table of Contents

- [Math - Testing simple functions, no hard dependencies](./src/services/math/)
- [Logger - jest.spyOn](./src/services/logger/)
- [App - Child Component Mocking](./src/app/)

## Todo

- Autentication - Manual Mocks
- React Mock Service Worker(MSW)
- Simple Mocking process.env
- Async Testing
- React UseEffect
- ~~React Component - Header~~
- ~~Simple Jest - Math~~
- ~~Add pre-commit hooks~~
- ~~React Mock Logger~~
- ~~Axios request mocking~~

# Done:

- [Test - React Component Mocking](src/app/readme.md)
- [Test - Simple TS Jest - Math](src/services/math/readme.md)
- [Test - React Mock Logger](src/services/logger/readme.md)
- [Test - Axios request mocking](src/services/todo/readme.md)

## Info & Thoughts on Jest

## Testing Strategies

Social Testing is a testing strategy that focuses on testing code with its dependencies. It commonly involves testing components, services, and other dependencies together. This strategy is helpful for testing code in a real-world scenario and is often used to test components and services. You can get a real idea of how your code intergrates with other code.

### Solidarity Testing

Solidarity Testing is a testing strategy that focuses on testing code with its dependencies mocked. It commonly involves mocking components, services, and other dependencies. This strategy is helpful for testing code in isolation and is often used to test components and services.

Learn more about Solidarity & Social Testing at the link below.

[Unit Testing - Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)

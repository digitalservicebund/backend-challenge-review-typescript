# DigitalService4Germany Backend-Challenge Typescript

This is a basis for the technical deep dive interview. It provides a solution specifically for the task described below.

It is a basis for discussion and we are looking forward to any aspects that could be improved.

**You can ignore everything in .reviewSetup. These are just some internal scripts**

## The Task

GovData.de is the data portal for Germany. The federal, state and local governments can share their data. Although the "Open Data Act" makes it obligatory to share data, only about 52,000 data sets are online so far.

Create a small web application that provides a dashboard showing how many data sets each federal ministry has made available on GovData. States, municipalities and other institutions should be ignored. It should be easy to tell from the dashboard which ministries have provided the most data.

Use GovData's CKAN Action API (documentation) to solve this challenge. In departments.json you will find all federal ministries and their subordinated agencies that have published data on GovData.

## Requirements

- Node v18 (may work on older versions, but has not been tested)

Install all dependencies

```
npm install
```

## How to run

You can run the application on http://localhost:8080.

```
npm start
```

## Development

If you want to use a watcher during development, you can use:

```
 npm run watch:start
```

### How to test

- Execute `npm test`
- A watcher is available via `npm run watch:test`

### Linting, Formatting

- Run `npm run lint` to run check for linting
- Run `npm run lint:fix` to fix linting errors (where possible)

- Run `npm run prettier:check` to check formatting
- Run `npm run prettier:write` to fix formatting (where possible).

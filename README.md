# Purrfect Dashboard

This is a prototype dashboard for the Purrfect application.

The application runs as a Node.js HTTP server, which serves both the front-end code (React) and provides a front-end focussed API for secure access to the Airtable API.

## Environment variables

The server needs the following environment variables to be set, either in a local `.env` file, in the shell, or passed to `docker run`:

| Name | Required? | Purpose | Default |
| ---- | --------- | ------- | ------- |
| `PORT` | N | server http port | 3000 |
| `AIRTABLE_BASE` | Y | Airtable base id for Purrfect | |
| `AIRTABLE_API_KEY` | Y | Airtable API key | |
| `AIRTABLE_TABLE_ORDERS` | N | Airtable `orders` table id | `orders` |

The `AIRTABLE_API_KEY` can be a Personal Access Key (PAT) or older User Token.

## Development setup

> You need `Node.js` installed, version 18 or better is recommended.

Install dependencies:
```
npm install
```

### Starting locally for development

In one shell, start the TypeScript compiler in watch mode by running:
```
npm run build:dev
```
this will re-compile the back-end API server code automatically.

In another shell, start webpack in watch mode, and start the application server itself by running:

```
npm run start:dev
```

> You will need environment variables set, see above.

The application server will start on port 3000 (default).

You should now be able to visit http://localhost:3000


## 'Production' build

You will need Docker installed and running.

To build the image (tagged as `purrfect-dash`):

```
docker build --tag purrfect-dash .
```

To run the image locally, you must provide the required environment variables, using either the `-e` syntax, or using `--env-file`, and map the correct ports locally, e.g.:

```
docker run -it --rm -p3000:3000 --env-file .env purrfect-dash
```

> Ensure you have stopped any services on the port, e.g. stop the `start:dev` server above.

You should now be able to visit http://localhost:3000

---

(C) Ellis Pritchard 2023.

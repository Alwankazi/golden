# Golden Bouquet mock backend

This is a small local API for exercising checkout wiring from the Vite frontend. It uses Node's built-in HTTP server and stores orders in memory. Restarting the process clears all orders. It does not connect to SkipCash, validate real prices, persist data, or represent a production-ready checkout.

## Requirements

- Node.js 20 or newer

## Run locally

```sh
cd backend
npm run dev
```

The API listens on `http://localhost:3001`. Set `PORT` to change the port and `FRONTEND_URL` to allow another development frontend origin.

## Endpoints

- `GET /api/health` — reports that the mock API is running.
- `POST /api/checkout/orders` — accepts `{ "items": [{ "sku": "sample", "quantity": 1 }] }` and creates an in-memory pending order.
- `GET /api/checkout/orders/:id` — returns the order's current mock status.
- `POST /mock-checkout/:id` — marks an order paid for local flow testing. This route must never be exposed as a real payment confirmation mechanism.

Example:

```sh
curl -X POST http://localhost:3001/api/checkout/orders \
  -H 'Content-Type: application/json' \
  -d '{"items":[{"sku":"sample","quantity":1}]}'
```

All order data and payment outcomes are simulated. Replace this mock implementation with the planned database-backed API and verified SkipCash integration before accepting payments.

import { createServer } from 'node:http'
import { randomUUID } from 'node:crypto'

const port = Number(process.env.PORT ?? 3001)
const host = process.env.HOST ?? '127.0.0.1'
const allowedOrigins = new Set([
  'http://localhost:5173',
  process.env.FRONTEND_URL,
].filter(Boolean))

const orders = new Map()

function sendJson(response, status, payload) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' })
  response.end(JSON.stringify(payload))
}

async function readJson(request) {
  let body = ''
  for await (const chunk of request) {
    body += chunk
    if (body.length > 16_384) throw new Error('Request body is too large')
  }
  return body ? JSON.parse(body) : {}
}

const server = createServer(async (request, response) => {
  const origin = request.headers.origin
  if (origin && allowedOrigins.has(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin)
    response.setHeader('Vary', 'Origin')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Idempotency-Key')
  }

  if (request.method === 'OPTIONS') {
    response.writeHead(204)
    response.end()
    return
  }

  const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`)

  if (request.method === 'GET' && url.pathname === '/api/health') {
    sendJson(response, 200, { status: 'ok', mode: 'mock' })
    return
  }

  if (request.method === 'POST' && url.pathname === '/api/checkout/orders') {
    let body
    try {
      body = await readJson(request)
    } catch {
      sendJson(response, 400, { error: 'INVALID_JSON', message: 'Send a valid JSON body.' })
      return
    }

    if (!Array.isArray(body.items) || body.items.length === 0) {
      sendJson(response, 400, { error: 'ITEMS_REQUIRED', message: 'Add at least one item.' })
      return
    }

    const id = randomUUID()
    const order = {
      id,
      status: 'PENDING',
      items: body.items,
      createdAt: new Date().toISOString(),
    }
    orders.set(id, order)

    sendJson(response, 201, {
      orderId: id,
      status: order.status,
      checkoutUrl: `http://localhost:${port}/mock-checkout/${id}`,
      message: 'Mock checkout only. No payment has been created.',
    })
    return
  }

  const statusMatch = url.pathname.match(/^\/api\/checkout\/orders\/([\w-]+)$/)
  if (request.method === 'GET' && statusMatch) {
    const order = orders.get(statusMatch[1])
    if (!order) {
      sendJson(response, 404, { error: 'ORDER_NOT_FOUND' })
      return
    }
    sendJson(response, 200, { orderId: order.id, status: order.status })
    return
  }

  const mockCheckoutMatch = url.pathname.match(/^\/mock-checkout\/([\w-]+)$/)
  if (request.method === 'POST' && mockCheckoutMatch) {
    const order = orders.get(mockCheckoutMatch[1])
    if (!order) {
      sendJson(response, 404, { error: 'ORDER_NOT_FOUND' })
      return
    }
    order.status = 'PAID'
    sendJson(response, 200, {
      orderId: order.id,
      status: order.status,
      message: 'Mock payment marked paid for local testing only.',
    })
    return
  }

  sendJson(response, 404, { error: 'NOT_FOUND' })
})

server.listen(port, host, () => {
  console.log(`Golden Bouquet mock API listening on http://${host}:${port}`)
})

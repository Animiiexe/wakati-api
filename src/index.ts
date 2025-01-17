import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({message : "Hey there Hello from Get"})
})

app.post('/analyze', async(c) => {
 const body = await c.req.json()
 const result = await c.env.AI.run
})

export default app

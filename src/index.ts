import {OpenAPIHono} from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

const app = new OpenAPIHono()

app.notFound(notFound)
app.onError(onError)

app.get('/', async (c) => {
  return c.json({ message: 'Wakati API is active' })
})



export default app

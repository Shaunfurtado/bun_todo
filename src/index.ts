import { Elysia } from 'elysia'

new Elysia()
	.get('/', () => 'Hello world Elysia')
	.listen(3000)
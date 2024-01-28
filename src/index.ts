import { Elysia } from 'elysia'
import 'htmx.org';

new Elysia()
	.get('/', () => 'Hello worl sdgfsdg Elysia')
	.listen(3000)
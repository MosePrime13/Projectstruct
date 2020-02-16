import fastify from 'fastify';
import { errorResponses } from '../traits/responses';

import postsRoutes from './v1/post';
import usersRoutes from './v1/user';

export default function(app: fastify.FastifyInstance) {

    app.register(postsRoutes, { prefix: '/api/v1/post' });
    app.register(usersRoutes, { prefix: '/api/v1/user' });

    app.setNotFoundHandler((req, res) => {
        res.code(404).send(errorResponses('001', 'Page not found', []));
    });

    app.setErrorHandler((error, req, res) => {
        const statusCode = error.statusCode
        if (statusCode >= 500) {
            app.log.error(error)
        } else if (statusCode >= 400) {
            app.log.info(error)
        } else {
            app.log.error(error)
        }
        res.code(500).send(errorResponses('001', 'Server error', [{ message: error.message }]));
    });
    
}
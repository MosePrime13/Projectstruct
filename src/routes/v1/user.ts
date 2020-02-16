import { errorResponseObj, errorResponses, successResponses, successResponseObj } from './../../traits/responses';
import fastify from 'fastify';


export default function (app: fastify.FastifyInstance, options, done){

    const db = app['cockroachdb'].db;

        // CREATE USER
        app.post('/create', {}, async(req, res) => {

            const createUser = await db.User.create(req.body);

            res.send(createUser)

        });
    
    
    done();

}
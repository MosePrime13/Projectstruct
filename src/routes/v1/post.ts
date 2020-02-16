import { errorResponseObj, errorResponses, successResponses, successResponseObj } from './../../traits/responses';
import fastify from 'fastify';


export default function (app: fastify.FastifyInstance, options, done){

    const db = app['cockroachdb'].db;

        // CREATE POST
        app.post('/create', {}, async(req, res) => {

            const user = await db.User.findByPk(req.body.user);

            if(!user){
                return res.code(400).send('Unknown user');
            }

            const createPost = await user.createPost({
                title: req.body.title,
                description: req.body.description
            });


            res.send(createPost)

        });
    

    
    done();

}
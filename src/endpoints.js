import {dobr, somar, temp, media } from './services.js'

import { Router } from 'express'
const server = Router();




server.get('/dobro/:numero', (req, resp) => {
    try{
    const a = Number(req.params.numero);

    const c = dobr(a);

    resp.send({
        x : c
    })
    }catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }

})


server.get('/somar', (req, resp) => {
    try{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const c = somar(a, b);

    resp.send({
        x: c

    })

    }catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }
    

} )

server.get('/temp', (req, resp) => {
    try{
    const a = Number(req.query.a);

    const c = temp(a);

    resp.send({
        x: c

    })

    }catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }
    

} )

server.post('/media', (req, resp) => {
    try{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const d = Number(req.query.c);

    const c = media(a, b, d);

    resp.send({
        x: c

    })

    }catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }
    

} )



export default server;
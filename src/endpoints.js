import {dobr, somar, temp, media, array, corprim, cinema, maior, repetir } from './services.js'

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
    
})

server.post('/media', (req, resp) => {
    try{
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    const d = Number(req.body.c);

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

server.get('/tabuada', (req, resp) => {
    try{
    const a = req.query.a;

    const b = array(a)

    resp.send({
        x: b
    })

    }catch(err){

        resp.status(404).send({
            erro:err.message

        })
    }
})


server.get ('/dia2/corprimaria/:cor', (req,resp) => {
    try {
        const a = req.params.cor

        const b = corprim(a)

        resp.send ({
            primaria:b
        })

    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }

})

server.post('/dia2/ingressocinema', (req, resp) => {
    try{
        const a = req.body.a
        const b = req.body.b
        const c = req.body.c
        const d = req.body.d

        const e = cinema(a, b, c, d)

        resp.send({
            Total: e

        })
    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})


server.post ('/dia2/maiornumero', (req,resp) => {
    try {
        const a = req.body.a

        const b = maior(a)

        resp.send({
            maior:b
        })
    } catch (err) {
        resp.status (404).send({
            erro:err.message
        })
    }
})

server.get('/dia2/fraqcaracter/:frase/:letra', (req, resp) => {
    try{
        const a = req.params.frase;
        const b = req.params.letra;

        const c = repetir(a, b)

        resp.send({
            freq: c
        })

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })


    }
})


export default server;
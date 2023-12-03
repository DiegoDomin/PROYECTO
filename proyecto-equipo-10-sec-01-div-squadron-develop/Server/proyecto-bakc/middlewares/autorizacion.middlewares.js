const mongoose = require('mongoose');
const User = require("../models/user.model");
const debug = require("debug")("app:autorizacion.middlewares");
const { verifyToken } = require("../utils/jwt.tools");
const ROLES = require("../data/roles.constants.json")

//Metodo/metodologia de como estan llegando las coasas, esto para verificar el token en insomnia 
const PREFIX ="Uwu";

const middlewares = {};

middlewares.autenticacion = async (req, res, next) =>{
    try {
        //Sirve para verificar el usuario pero para eso esta la ultima tarea
        //debug ("User autenticado");

        //Verificacion de la autorizacion 
        const {autenticacion} = req.headers;

        if(!autenticacion){
            return res.status(401).json({error: "User not autenticado"});
        }
        //Validez del token
        /*Estructura del token
        Token -> Uwu textoquenosotroscoloquemosoquevenga.latercerapartedeltoken
        */
        const [PREFIX, token] = autenticacion.split(" ");//String, colocamos el espacio que es el separador en la estructura
        
        if (prefix !== PREFIX) { 
            return res.status(401).json({error: "User not autenticado"});
        }

        if(!token){
            return res.status(401).json({error: "User not autenticado"});
        }

        const payload = await verifyToken (token);
        if(!payload){
            return res.status(401).json({error: "User not autenticado"});
        }

        //debug({payload}); prueba

        const userId = payload["sub"];

        
        //ESTO ES DE REVISION//
        //Verificar el usuario
        const user_2 = await User.findOneById(userId);

        if(!user_2){
            return res.status(401).json({error: "User no encontrado"})
        }
        
        //Comparar el token registrado con los token registrados
        const isTokenValid = user_2.tokens.includes(token);

        if(!isTokenValid){
            return res.status(401).json({error: "User no encontrado"})
        }

        //Modificar la req, para poder annadir la info del usurio
        req.user_2 = user_2;
        req.token = token;


        next();
    } catch (error) {
        console.log(error);
        return res.status(550).json({error: "Internal Server Error"});
    }
}

middlewares.autenticacion = (roleRequired = ROLES.SYSADMIN)=>{
    return(req, res, next)=>{
        //Prueba de la verificacion del rol
        /*debug(roleRequired) 
        next();
        */
        
        //Modelo de usuario es necesario, por ende necesitamos una premisa
        //Premisa: debe de haber pasado por la autenticacion

        try {
            const { roles =[]} = req.user;

            //verificar si el rol requerido esta en la coleccion
            const isAuth = roles.includes(roleRequired);
            const isSysadmin = roles.includes(ROLE.SYSADMIN);
            
            //si no esta -> error 403
            if (!isAuth && !isSysadmin) {
                return res.status(403).json({error: "Forbidden"});
            }
            //si esta -> next
            next();
        } catch (error) {
            console.log(error);
        return res.status(550).json({error: "Internal Server Error"});
        }
    }
}

module.exports = middlewares;
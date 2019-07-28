import { Request, Response } from 'express';

import pool from '../database';
import pg_d from '../database';

class GamesController {

    public async list(req:Request, res:Response) {
        //pool.query('DESCRIBE games');
        
        const text = 'SELECT * FROM games';
        await pg_d.query(text, (err, resp) => {
            if (err){
                console.log(err.stack);
            }
            else{
                res.json(resp.rows);
            }
        })                
    } 

    public async listOne(req:Request, res:Response){
        
        const text = 'SELECT * FROM games WHERE id = $1';
        const valor = [req.params.id];
        await pg_d.query(text, valor, (err, response) => {
            if (err){
                console.log(err.stack);
                res.status(404).json({text:"game doesn´t exist :("});
            }
            else{
                res.json(response.rows);
            }
        });
        
        //res.json({text:'obtaining game: '+req.params.id});
    }

    public async create(req:Request, res:Response) {
        console.log(req.body.title);
        const text = 'INSERT INTO games(title, description, image, price) VALUES($1,$2,$3,$4) RETURNING *';
        const valores = [req.body.title, req.body.description, req.body.image, req.body.price];
        await pg_d.query(text, valores, (err, resp) => {           
            if (err){                
                console.log(err.stack);
            }
            else {                 
            }
        })       
        res.json({message:"Game saved :D"});
    }

    public async delete(req:Request, res:Response){
        
        const text = 'DELETE FROM games WHERE id = $1';
        const valor = [req.params.id];

        await pg_d.query(text, valor, (err, response) => {
            if (err){
                res.status(404).json({text:"Error.. Game not found"});
            }
            else{
                res.json({text:"Game successfully deleted"});
            }
        });
        
        /*res.json({
            text:"Deleting a game :("
        })*/
    }

    public async update(req:Request, res:Response) {
     
        const text = 'UPDATE games SET title = $2, description = $3, image = $4, price = $5 WHERE id = $1';
        const valores = [req.params.id, req.body.title, req.body.description, req.body.image, req.body.price];
        
        await pg_d.query(text, valores, (err, response) => {
            if (err){
                res.status(404).json({text:"Error... Game not found"});
            }
            else {
                res.json({text:"Game successfully updated :D"});
            }
        })

        //   res.json({text:"Updating a game "+req.params.id});
    }

}

const gamesControler = new GamesController();
export default gamesControler;
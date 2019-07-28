import { Router } from 'express';

import gamesController from '../controllers/gamesControllers';

class gamesRouter {

    public router:Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.listOne);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);

    }
    
}

const gameRouter = new gamesRouter();
export default gameRouter.router;
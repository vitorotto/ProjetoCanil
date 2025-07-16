import { Router } from "express";
import * as FilterAnimalController from '../controllers/filterAnimalController';
import * as SearchAnimalController from '../controllers/searchAnimalController';

const router = Router();

router.get('/',  FilterAnimalController.home);
router.get('/dogs',  FilterAnimalController.dogs);
router.get('/cats',  FilterAnimalController.cats);
router.get('/fishes',  FilterAnimalController.fishes);

router.get('/search', SearchAnimalController.search);


export default router;
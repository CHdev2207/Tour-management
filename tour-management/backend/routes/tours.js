
import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js'

const router = express.Router()


// create new tour 
router.post('/', createTour)

// update tour 
router.put('/:id', updateTour)

// delete tour 
router.delete('/', deleteTour)

// get single tour 
router.get('/', getSingleTour)

// create new tour 
router.get('/', getAllTour)

export default router;

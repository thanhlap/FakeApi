const express = require('express')
import * as cartControllers from '../controllers';

const router = express.Router()


router.get('/', cartControllers.getAllCarts)
router.get('/:id', cartControllers.getSingleCart)
router.get('/user/:userId', cartControllers.getCartsbyUserid)

router.post('/', cartControllers.addCart)
//router.post('/:id',cart.addtoCart)

router.put('/:id', cartControllers.editCart)
router.patch('/:id', cartControllers.editCart)
router.delete('/:id', cartControllers.deleteCart)

module.exports = router

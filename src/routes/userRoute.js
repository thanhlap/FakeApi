const express = require('express')
import * as userControllers from '../controllers';

const router = express.Router()


router.get('/', userControllers.getAllUser)
router.get('/:id', userControllers.getUser)
router.post('/', userControllers.addUser)
router.put('/:id', userControllers.editUser)
router.patch('/:id', userControllers.editUser)
router.delete('/:id', userControllers.deleteUser)

module.exports = router
const express = require('express')
import * as webControllers from '../controllers';

const router = express.Router()

router.get('/', webControllers.homePage)
router.get('/docs', webControllers.docsPage)

module.exports = router
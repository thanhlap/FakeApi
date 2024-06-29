import webRoute from './webRoute'
import productRoute from './productRoute'
import cartRoute from './cartRoute'
import userRoute from './userRoute'
import authRoute from './authRoute'


const initRoutes = (app) => {
    //web page
    app.use('/', webRoute)

    //API
    app.use('/api/products', productRoute)
    app.use('/api/carts', cartRoute)
    app.use('/api/users', userRoute)
    app.use('/api/auth', authRoute)
}

module.exports = initRoutes
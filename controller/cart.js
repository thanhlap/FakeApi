const Cart = require('../model/cart')

//Get all carts,Limit results,Sort results,Get carts in a date range
module.exports.getAllCarts = async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const sort = req.query.sort == "desc" ? -1 : 1
  const startDate = req.query.startdate || new Date('1970-01-01')
  const endDate = req.query.enddate || new Date()

  try {
    const carts = await Cart.find({ date: { $gte: new Date(startDate), $lt: new Date(endDate) } })
      .select('-_id -products._id')
      .limit(limit)
      .sort({ id: sort })

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      carts
    });

  } catch (error) {
    console.log(error)
  }
}

//Get user carts
module.exports.getCartsbyUserid = async (req, res) => {
  const { userId } = req.params
  const startDate = req.query.startdate || new Date('1970-1-1')
  const endDate = req.query.enddate || new Date()

  try {
    const carts = await Cart.find({ userId, date: { $gte: new Date(startDate), $lt: new Date(endDate) } })
      .select('-_id -products._id')

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      carts
    });

  } catch (error) {
    console.log(error)
  }

}

// Get a single cart
module.exports.getSingleCart = async (req, res) => {
  try {
    const { id } = req.params
    const cart = await Cart.findOne({ _id: id, })
      .select('-_id -products._id')
    return res.status(200).json({
      status: true,
      cart
    });
  } catch (error) {
    console.log(error)
  }
}


//add new cart
module.exports.addCart = async (req, res) => {
  try {
    if (typeof req.body == undefined) {
      return res.json({
        status: "error",
        message: "data is undefined"
      })
    } else {
      const cartCount = await Cart.countDocuments();
      const cart = await Cart.create({
        id: cartCount + 1,
        userId: req.body.userId,
        date: req.body.date,
        products: req.body.products
      })

      return res.status(200).json({
        status: true,
        massege: "Thêm mới thành công",
        cart
      });
    }
  } catch (error) {
    console.log(error)
  }

}

//Update a cart
module.exports.editCart = async (req, res) => {
  try {
    const { id } = req.params
    if (typeof req.body == undefined || id == null) {
      return res.json({
        status: false,
        message: "something went wrong! check your sent data",
      });
    } else {

      const cart = await Cart.findOneAndUpdate({ _id: id },
        {
          userId: req.body.userId,
          date: req.body.date,
          products: req.body.products
        }
      );

      return res.status(200).json({
        status: true,
        massege: "Cập nhật thành công",
        cart,
      });
    }

  } catch (error) {
    console.log(error)
  }
}


//Delete a cart
module.exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params
    const cartExit = await Cart.findOne({ _id: id, })
    if (!cartExit) {
      return res.json({
        status: false,
        message: "Cart không tồn tại",
      });
    } else {
      await Cart.findByIdAndDelete(id)
      return res.status(200).json({ status: true, msg: "Xóa thành công" })
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }

}

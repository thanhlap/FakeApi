const Cart = require('../models/cart')

//Get all carts,Limit results,Sort results,Get carts in a date range
module.exports.getAllCarts = async (req, res) => {
  try {
    const startDate = req.query.startdate || new Date('1970-01-01')
    const endDate = req.query.enddate || new Date()
    const fields = req.query.fields ? req.query.fields.split(',').join(' ') : "";
    const sort = req.query.sort ? req.query.sort.split(',').join(' ') : "DESC";

    const limit = +req.query.limit || 0 //số records hiển thị trên mỗi trang
    var page = +req.query.page || 0 //trang hiện tại


    const total_records = await Cart.find({ date: { $gte: new Date(startDate), $lt: new Date(endDate) } }).countDocuments(); //tổng số records
    const total_page = limit != 0 ? Math.ceil(total_records / limit) : 0; // tổng số trang

    //kiểm tra page nhập âm hoặc lơn hơn tổng page
    if (page < 0) page = 1
    if (page > total_page) page = total_page;
    const start = +((page - 1) * limit) || 0 //loại bỏ số phần tử trước của page hiện tại

    //limit and skip
    if (page && limit) {
      let carts = await Cart.find({ date: { $gte: new Date(startDate), $lt: new Date(endDate) } })
        .select(fields)
        .sort({ id: sort })
        .skip(start)
        .limit(limit)

      return res.status(200).json({
        status: true,
        massege: "Hiển thị danh sách thành công",
        limit, // số records hiển thị trên mỗi trang 
        page, // page hiện tại
        total_records, //tổng số records
        total_page, // tổng số các page
        carts
      });

    } else {
      let carts = await Cart.find({ date: { $gte: new Date(startDate), $lt: new Date(endDate) } })
        .select(fields)
        .sort({ id: sort })
        .limit(limit)

      return res.status(200).json({
        status: true,
        massege: "Hiển thị danh sách thành công",
        limit, // số records hiển thị trên mỗi trang 
        page, // page hiện tại
        total_records, //tổng số records
        total_page, // tổng số các page
        carts
      });
    }

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

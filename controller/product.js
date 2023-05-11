const Product = require("../model/product");

//get all,limit,sort
module.exports.getAllProducts = async (req, res) => {
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;
  try {
    const product = await Product.find()
      .select(["-_id"])
      .limit(limit)
      .sort({ id: sort })

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      product
    });

  } catch (error) {
    console.log(error)
  }

};

//get single detail
module.exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ id, })
      .select(["-_id"])
    return res.status(200).json({
      status: true,
      product
    });
  } catch (error) {
    console.log(error)
  }
};

//get all category có trong products
module.exports.getProductCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category")

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      categories
    });
  } catch (error) {
    console.log(error)
  }
};

//get products thuộc category
module.exports.getProductsInCategory = async (req, res) => {
  const category = req.params.category;
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  try {
    const products = await Product.find({ category, })
      .select(["-_id"])
      .sort({ id: sort })
      // .skip(skip)
      .limit(limit)

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      products
    });
  } catch (error) {
    console.log(error)
  }

};

//add product
module.exports.addProduct = async (req, res) => {
  try {
    if (typeof req.body == undefined) {
      return res.json({
        status: false,
        message: "data is undefined",
      });
    } else {
      const productCount = await Product.countDocuments();
      const product = await Product.create({
        id: productCount + 1,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        rating: {
          rate: req.body.rating.rate,
          count: req.body.rating.count
        }
      });

      return res.status(200).json({
        status: true,
        massege: "Thêm mới thành công",
        product
      });
    }

  } catch (error) {
    console.log(error)
  }


};

//update product
module.exports.editProduct = async (req, res) => {
  try {
    if (typeof req.body == undefined || req.params.id == null) {
      return res.json({
        status: false,
        message: "something went wrong! check your sent data",
      });
    } else {

      const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { returnOriginal: false });

      return res.status(200).json({
        status: true,
        massege: "Cập nhật thành công",
        product,
      });
    }

  } catch (error) {
    console.log(error)
  }
};


//delete product
module.exports.deleteProduct = async (req, res) => {
  try {
    const productExit = await Product.findOne({ _id: req.params.id, })
    if (!productExit) {
      return res.json({
        status: false,
        message: "Product không tồn tại",
      });
    } else {
      await Product.findByIdAndDelete(req.params.id)
      return res.status(200).json({ status: true, msg: "Xóa thành công" })
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }

};

const Product = require("../model/product");

//get all,limit,sort
module.exports.getAllProducts = async (req, res) => {
  try {
    const search = req.query.search ? req.query.search.split(',').join(' ') : "";
    const filter = req.query.filter ? req.query.filter.split(',').join(' ') : "";
    const fields = req.query.fields ? req.query.fields.split(',').join(' ') : "";
    const sort = req.query.sort ? req.query.sort.split(',').join(' ') : "DESC";

    const limit = +req.query.limit || 0 //số records hiển thị trên mỗi trang
    var page = +req.query.page || 0 //trang hiện tại


    const total_records = await Product.find(
      {
        $or: [
          // “x” là bỏ qua khoảng trắng,
          // “i” là làm cho nó không phân biệt chữ hoa chữ thường, v.v.
          {
            title: { $regex: search, $options: "xi" },
          },
        ],
        category: { $regex: filter, $options: "xi" }
      }
    ).countDocuments(); //tổng số records
    const total_page = limit != 0 ? Math.ceil(total_records / limit) : 0; // tổng số trang

    //kiểm tra page nhập âm hoặc lơn hơn tổng page
    if (page < 0) page = 1
    if (page > total_page) page = total_page;
    const start = +((page - 1) * limit) || 0 //loại bỏ số phần tử trước của page hiện tại

    //limit and skip
    if (page && limit) {
      // product = product
      let products = await Product.find(
        {
          $or: [
            // “x” là bỏ qua khoảng trắng,
            // “i” là làm cho nó không phân biệt chữ hoa chữ thường, v.v.
            {
              title: { $regex: search, $options: "xi" },
            },
          ],
          category: { $regex: filter, $options: "xi" }
        }
      )
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
        products
      });

    } else {
      let products = await Product.find(
        {
          $or: [
            // “x” là bỏ qua khoảng trắng,
            // “i” là làm cho nó không phân biệt chữ hoa chữ thường, v.v.
            {
              title: { $regex: search, $options: "xi" },
            },
          ],
          category: { $regex: filter, $options: "xi" }
        }
      )
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
        products
      });
    }

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
  try {
    const category = req.params.category;
    const fields = req.query.fields ? req.query.fields.split(',').join(' ') : "";
    const sort = req.query.sort ? req.query.sort.split(',').join(' ') : "DESC";

    const limit = +req.query.limit || 0 //số records hiển thị trên mỗi trang
    var page = +req.query.page || 0 //trang hiện tại


    // Nếu không có page và limit
    const total_records = await Product.find({ category }).countDocuments(); //tổng số records
    const total_page = limit != 0 ? Math.ceil(total_records / limit) : 0; // tổng số trang

    //kiểm tra page nhập âm hoặc lơn hơn tổng page
    if (page < 0) page = 1
    if (page > total_page) page = total_page;
    const start = +((page - 1) * limit) || 0 //loại bỏ số phần tử trước của page hiện tại

    //limit and skip
    if (page && limit) {
      let products = await Product.find({ category })
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
        products
      });
    } else {
      let products = await Product.find({ category })
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
        products
      });
    }

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

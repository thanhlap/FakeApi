const User = require('../model/user')

//get all users
module.exports.getAllUser = async (req, res) => {
  try {
    const search = req.query.search ? req.query.search.split(',').join(' ') : "";
    const fields = req.query.fields ? req.query.fields.split(',').join(' ') : "";
    const sort = req.query.sort ? req.query.sort.split(',').join(' ') : "DESC";

    const limit = +req.query.limit || 0 //số records hiển thị trên mỗi trang
    var page = +req.query.page || 0 //trang hiện tại

    const total_records = await User.find(
      {
        $or: [
          { username: { $regex: search, $options: "xi" } },
          { email: { $regex: search, $options: "xi" } },
        ],
      }
    ).countDocuments(); //tổng số records
    const total_page = limit != 0 ? Math.ceil(total_records / limit) : 0; // tổng số trang


    //kiểm tra page nhập âm hoặc lơn hơn tổng page
    if (page < 0) page = 1
    if (page > total_page) page = total_page;
    const start = +((page - 1) * limit) || 0 //loại bỏ số phần tử trước của page hiện tại


    //limit and skip
    if (page && limit) {
      let users = await User.find(
        {
          $or: [
            // “x” là bỏ qua khoảng trắng,
            // “i” là làm cho nó không phân biệt chữ hoa chữ thường, v.v.
            { username: { $regex: search, $options: "xi" } },
            { email: { $regex: search, $options: "xi" } },
          ],
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
        users
      });
    } else {
      let users = await User.find(
        {
          $or: [
            // “x” là bỏ qua khoảng trắng,
            // “i” là làm cho nó không phân biệt chữ hoa chữ thường, v.v.
            { username: { $regex: search, $options: "xi" } },
            { email: { $regex: search, $options: "xi" } },
          ],
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
        users
      });
    }


  } catch (error) {
    console.log(error)
  }

}

// Get a single user
module.exports.getUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findOne({ _id: id, })
      .select(["-_id"])
    return res.status(200).json({
      status: true,
      user
    });
  } catch (error) {
    console.log(error)
  }
}


//add new user
module.exports.addUser = async (req, res) => {
  try {
    if (typeof req.body == undefined) {
      return res.json({
        status: "error",
        message: "data is undefined"
      })
    } else {
      const userCount = await User.countDocuments();
      const users = await User.create({
        id: userCount + 1,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        name: {
          firstname: req.body.name.firstname,
          lastname: req.body.name.lastname
        },
        address: {
          city: req.body.address.city,
          street: req.body.address.street,
          number: req.body.number,
          zipcode: req.body.zipcode,
          geolocation: {
            lat: req.body.address.geolocation.lat,
            long: req.body.address.geolocation.long
          }
        },
        phone: req.body.phone
      })

      return res.status(200).json({
        status: true,
        massege: "Thêm mới thành công",
        users
      });

    }
  } catch (error) {
    console.log(error)
  }
}

//update a user
module.exports.editUser = async (req, res) => {
  try {
    const { id } = req.params
    if (typeof req.body == undefined || id == null) {
      return res.json({
        status: false,
        message: "something went wrong! check your sent data",
      });
    } else {

      const user = await User.findOneAndUpdate({ _id: id },
        {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          name: {
            firstname: req.body.name.firstname,
            lastname: req.body.name.lastname
          },
          address: {
            city: req.body.address.city,
            street: req.body.address.street,
            number: req.body.number,
            zipcode: req.body.zipcode,
            geolocation: {
              lat: req.body.address.geolocation.lat,
              long: req.body.address.geolocation.long
            }
          },
          phone: req.body.phone
        }
      );

      return res.status(200).json({
        status: true,
        massege: "Cập nhật thành công",
        user,
      });
    }

  } catch (error) {
    console.log(error)
  }

}

//delete user
module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const userExit = await User.findOne({ _id: id, })
    if (!userExit) {
      return res.json({
        status: false,
        message: "User không tồn tại",
      });
    } else {
      await User.findByIdAndDelete(id)
      return res.status(200).json({ status: true, msg: "Xóa thành công" })
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
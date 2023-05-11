const User = require('../model/user')

//get all users
module.exports.getAllUser = async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const sort = req.query.sort == "desc" ? -1 : 1

  try {
    const users = await User.find()
      .select(["-_id"])
      .limit(limit)
      .sort({ id: sort })

    return res.status(200).json({
      status: true,
      massege: "Hiển thị danh sách thành công",
      users
    });

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
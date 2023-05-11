const User = require("../model/user");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {

      const user = await User.findOne({ username, password }).select('-password')
      if (!user) {
        return res.json({
          status: false,
          msg: "Tên đăng nhập hoặc tài khoản của bạn không chính xác",
        });
      } else {
        return res.json({
          status: true,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          user
        });
      }
    }
  } catch (error) {
    console.log(error)
  }

};

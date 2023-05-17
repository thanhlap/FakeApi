//initializes
const express = require("express");
const app = express();
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();



//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//view engine
viewEngine(app);
//routes
initWebRoutes(app);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});


//kết nối đb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Kết nối database thành công!"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 6400
app.listen(PORT, () => {
  console.log('Server is running on port:', PORT)
})

module.exports = app;

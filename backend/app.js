const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const connectDb = require("./Config/db.js");
const adminRoutes = require("./routes/adminRoutes.js");
const path = require("path");

const port = 7777;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.use("/admin", adminRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const seeder = require("./Config/sedder.js");

connectDb()
  .then(() => {
    seeder.adminSeeder();

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Server not started. DB connection failed:", error.message);
  });

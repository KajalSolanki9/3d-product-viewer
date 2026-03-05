require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// connect to database 
connectDB();

app.listen(PORT, () => {
  console.log(`Backend server started on port ${PORT}`);
});
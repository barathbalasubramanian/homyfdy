const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const cors = require("cors");
const protectedRoute = require("./routes/protectedRoute");
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Destruct the Request Body Data
app.use(express.json());
app.use(cookieParser());

/**
 * - Routes Required
 */
const authRouter = require("./routes/auth.routes");
const accountRouter = require("./routes/account.routes");
const transactionRouter = require("./routes/transaction.routes");

/**
 * -Use Routes
 */
app.get("/", (req, res) => {
  res.send("Ledger Service is up and Running");
});
app.use("/api/auth", authRouter); //Auth Router
app.use("/api/accounts", accountRouter); //Account Router
app.use("/api/transactions", transactionRouter); //Transaction Router

module.exports = app;

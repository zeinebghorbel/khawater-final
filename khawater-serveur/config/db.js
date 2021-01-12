const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://zeineb:1234@cluster0.qfhgp.mongodb.net/khawater?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

module.exports = mongoose;

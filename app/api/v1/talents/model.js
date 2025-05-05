const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let talentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Nama pembicara tidak boleh kosong"],
    },
    role: {
      type: String,
      default: "-",
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
      required: true,
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Talent", talentSchema);

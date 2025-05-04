const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let organizersSchema = Schema (
    {
        organizer: {
            type: String,
            minlength: [3, "Nama penyelenggara minimal 3 karakter"],
            maxlength: [20, "Nama penyelenggara maksimal 20 karakter"],
            required: [true, "Nama penyelenggara harus diisi"],
        },
    },
    { timestamps: true },
);

module.exports = model("Organizer", organizersSchema);
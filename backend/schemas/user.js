const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true // Trim spaces from name
    },
    email: {
        type: String,
        required: true,
        unique: true, // Enforcing unique email
        lowercase: true, // Convert email to lowercase
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'] // Regex for email validation
    },
    // You could add more fields here if necessary (e.g., profile photo, roles, etc.)
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameQueryFields: ['email'],
  usernameUnique: false // ⭐️ very important to avoid creating `username_1` index
});

module.exports = mongoose.model('User', userSchema);

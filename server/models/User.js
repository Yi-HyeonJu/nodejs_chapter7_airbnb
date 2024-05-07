const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
        default: '' //유저들의 기본 이미지 사진 주소
    }
})


const User = mongoose.model("User",userSchema)

module.exports = User
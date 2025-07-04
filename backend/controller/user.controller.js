import { User } from "../src/models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const isUserExisted = await User.findOne({ email });

    if (!isUserExisted) {
        return res.status(404).json({ message: "User does not exist. Please register." });
    }

    const isPasswordVerified = await bcrypt.compare(password, isUserExisted.password);

    if (isPasswordVerified) {

        const accessToken = await jwt.sign(
        {
            id: isUserExisted._id,
            email: isUserExisted.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
        const user = await User.findById(isUserExisted._id);
        return res.status(200).json({ accessToken, user, message: "Login successful." });
    }

    return res.status(401).json({ message: "Invalid email or password." });
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExisted = await User.findOne({
        $or: [
            { email: email },
            { name: name }
        ]
    });

    if (isUserExisted) {
        return res.status(409).json({ message: "User already exists. Please log in." });
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (!user) {
        return res.status(500).json({ message: "User registration failed." });
    }

    const accessToken = await jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );

    return res.status(201).json({ accessToken, user, message: "Registration successful." });
};

const getUser = async(req,res)=>{
    const {userId} = req.params

    const user = await User.findById(userId)

    if(user){
        return res.status(200).json({user, message: "User fetched successful." });
    }

    res.status(404).json({message: "No User corresponding to UserId" });
};

export { loginUser, registerUser , getUser };
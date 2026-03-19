const User = require("../model/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { get } = require("mongoose");

const register = async(req, res) => {
    // Destructuing the data
    const { firstName, lastName, email, password } = req.body;
    try {
        if(!firstName || !lastName || !email || !password) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required" 
            });
        }

        const existingEmail = await User.findOne({ email: email });
        if(existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already exists.."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({
            firstName, lastName, email, password: hashedPassword
        });

        const token = jwt.sign({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        }, process.env.JWT_SECRET, { expiresIn: "1d" })


        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            newUser
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error ${error}`
        });
    }
}

const login = async (req, res) => {
    const {email, password} = req.body; 
    try{
        if(!email || password)
            return res.status(400).json({
        success: false,
        message: "All fields are required"
    });
    const user = await User.findone({'email': email});
    if(!user){
        return res.status(400).json({
            success: false,
            message: "User doesnot exit"
        });
    }
    
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword){
        return res.status(400).json({
            success: false,
            message: "Invalid Password"
        });
    }
    return res.status(200).json({
        success: true, 
        message: "Login Successfully",
        user
    });
} catch (error){
    return res.status(500).json({
        success: true, 
        message: `Error while login is ${error}`,
    });
}

}

const getProfile = async (req, res) => {
     const id = req.params.id;
        try {
            const user = await User.findById(id);
            if(!user) {
                return res.status(400).json({
                    success: false,
                    message: "User doesn't exist"
                });
            }
            return res.status(200).json({
                success: true,
                message: "Profile fetched successfully",
                user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: `Error while getting profile is ${error}`
            });
        }
}

module.exports = {
    register,
    login,
    getProfile
}


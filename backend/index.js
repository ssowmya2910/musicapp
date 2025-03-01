require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.use(cors());

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);
const SECRET_KEY="gizliii"
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("MDB Connection successfull");
})
.catch((err) => {
  console.log("Check your connection string", err);
});
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ email, password: hashedPassword });
        res.json({ success: true, message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating user" });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ success: true, token });
});

app.get('/songs', (req, res) => {
    const songs = [
        { id: 1, name: "Song 1", image: "song1.jpg" },
        { id: 2, name: "Song 2", image: "song2.jpg" }
    ];
    res.json(songs);
});

app.listen(3001, () => console.log("Server running on port 3001"));

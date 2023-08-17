import User from "./userSchema.js";
import Product from "./productSchema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred" });
  }
};

export const addProduct = async (request, response) => {
  const product = request.body;
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    response.status(201).json(newProduct);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Import function from user Structure
import {
  getUsers,
  getUsersById,
  insertUsers,
  updateUsersById,
  // deleteUsersById,
} from "../models/userStructure.js";

// Get All Products
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
export const showUserById = (req, res) => {
  getUsersById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Product
export const createUser = (req, res) => {
  const data = req.body;
  insertUsers(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const registerUser = (req, res) => {
  const data = req.body;
  console.log(data);
  insertUsers(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
export const loginUser = (req, res) => {
  const data = req.body;
  console.log(data);
  insertUsers(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Product
export const updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateUsersById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//Delete Product
// export const deleteUser = (req, res) => {
//   const id = req.params.id;
//   deleteUserById(id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// import connection
import db from "../config/db.js";

// Get All Products
export const getUsers = (result) => {
  db.query("SELECT * FROM registration", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single Product
export const getUsersById = (id, result) => {
  db.query(
    "SELECT * FROM registration WHERE User_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Insert Product to Database
export const insertUsers = (data, result) => {
  db.query("INSERT INTO registration SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
export const updateUsersById = (data, id, result) => {
  db.query(
    "UPDATE registration SET User_name = ?, Email = ?, Password = ?,Conf_pwd  = ?, WHERE User_id = ?",
    [data.User_name, data.Email, data.Password, data.Conf_pwd, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
export const loginUserById = (data, id, result) => {
  db.query(
    "UPDATE registration SET User_name = ?,  Password = ?, WHERE User_id = ?",
    [data.User_name, data.Password, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
// Delete Product to Database
// export const deleteUserById = (id, result) => {
//   db.query("DELETE FROM User WHERE User_id = ?", [id], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };

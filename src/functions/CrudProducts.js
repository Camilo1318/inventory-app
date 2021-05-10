import { db } from "../Firebase"; //import Firestore of Firebase

//CRUD

const productsRef = db
  .collection("DataBase")
  .doc("Duitama")
  .collection("Productos");

export const addProduct = async (newProduct) => {
  await productsRef.add(newProduct);
};

export const deleteProductById = async (id) =>
  await productsRef.doc(id).delete();

export const editProductById = async (id, updateProduct) => {
  await productsRef.doc(id).update(updateProduct);
};
// Helpers

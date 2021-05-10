import { db } from "../Firebase"; //import Firestore of Firebase

//CRUD

const productsRef = db
  .collection("DataBase")
  .doc("Duitama")
  .collection("Clientes");

export const addClient = async (newClient) => {
  await productsRef.add(newClient);
};

export const deleteClientById = async (id) =>
  await productsRef.doc(id).delete();

export const editClientById = async (id, updateClient) => {
  await productsRef.doc(id).update(updateClient);
};
// Helpers

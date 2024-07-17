import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config.js";
import { fakeMenu } from "../fakeData/fakeMenu.jsx";

export const getUser = async (userId) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

// Quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2e cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3e cas : résultat négatif de la promesse achevée => résultat négatif (rejected)

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  setDoc(docRef, newUserToCreate);
  return newUserToCreate;
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return createUser(userId);
  }
  return existingUser;
};
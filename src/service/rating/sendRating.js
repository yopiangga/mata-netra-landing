import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore();

export default async function sendRating(rating, message) {
  const result = await addDoc(collection(db, "ratings"), {
    time: Date.now().toString(),
    rating: rating,
    message: message,
  });

  return result;
}

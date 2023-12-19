import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore();

export async function getRatingCount() {
  const result = await getDocs(collection(db, "ratings"));
  let i = 0;
  let rate = 0;

  result.forEach((doc) => {
    rate += doc.data().rating;
    i += 1;
  });

  rate = rate / i;

  return { rate: rate, user: i };
}

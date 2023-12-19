import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore();

export default async function getLinkDownload() {
  const result = await getDocs(collection(db, "link-download"));
  let path = "";
  result.forEach((doc) => {
    path = doc.data().path;
  });
  return path;
}

import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// const db = getFirestore();

export default async function sendDownload(ip) {
  const result = await addDoc(collection(getFirestore(), "download"), {
    time: Date.now().toString(),
    ip: ip,
  });

  return result;
}

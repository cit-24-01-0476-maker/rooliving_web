import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export type RequestType = "loan" | "service" | "inspection";

export async function createRequest(type: RequestType, payload: Record<string, any>) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("Please login first.");
  }

  const ref = await addDoc(collection(db, "requests"), {
    type,
    userId: user.uid,
    userEmail: user.email || "",
    payload,
    status: "pending",
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

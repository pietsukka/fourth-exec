import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

//Exports Delete contact function
export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
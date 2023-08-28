import { redirect } from "react-router-dom";

export const logOutAction = () => {
  localStorage.removeItem("token");
  return redirect("/");
};

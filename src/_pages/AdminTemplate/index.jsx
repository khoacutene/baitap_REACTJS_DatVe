import { Outlet } from "react-router-dom";
import Authpage from "./Authpage";
export default function AdminTemplate() {
  return (
    <div>
      <h1>AdminTemplate</h1>
      <Authpage/>
      <Outlet/>
    </div>
  );
}

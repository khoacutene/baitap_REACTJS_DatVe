// import Example1 from "./example-1";
// import Example2 from "./example-2";
// import RenderingElements from "./rendering-elements";
// import HandlingEvents from "./handlingEvents";
// import State from "./state";
// import CarColor from "./car-color";
// import ListKey from "./list-key";
// import Communicate from "./communicate";
// import FormDemo from "./form-demo";
// import FormRegister from "./form-register";
// import ShoppingPhone from "./shopping-phone";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./_pages/HomeTemplate";
import HomePage from "./_pages/HomeTemplate/HomePage";
import AboutPage from "./_pages/HomeTemplate/AboutPage";
import ListMovie from "./_pages/HomeTemplate/ListMoviePage";
import AdminTemplate from "./_pages/AdminTemplate";
import AdduserPage from "./_pages/AdminTemplate/AdduserPage";
import DashboardPage from "./_pages/AdminTemplate/DashboardPage";
import Authpage from "./_pages/AdminTemplate/Authpage";
import renderRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {renderRoutes()}
        {/* locahost:5173 */}
        {/* <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMovie />} />
        </Route>

        <Route path="admin" element={<AdminTemplate />} />
          <Route path="dashboard" element={<DashboardPage/>}/>
          <Route path="add-user" element={<AdduserPage/>}/>
        <Route/>
        <Route path="auth" element={<Authpage/>}/> */}
      </Routes>

      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <RenderingElements /> */}
      {/* <HandlingEvents /> */}
      {/* <State /> */}
      {/* <CarColor /> */}
      {/* <ListKey /> */}
      {/* <Communicate /> */}
      {/* <ShoppingPhone /> */}
      {/* <FormDemo /> */}
      {/* <FormRegister /> */}
    </BrowserRouter>
  );
}

export default App;

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout (){
    return (
        <div className="flex bg-[#F3F4F6] min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1">
        <Header />

        <div className="px-6 py-5">

          {/* ROUTES */}
         <Outlet/>


        </div>
      </div>
    </div>
    )
}
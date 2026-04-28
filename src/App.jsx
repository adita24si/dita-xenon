import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";

// --- LAZY LOADING (TARUH DI LUAR FUNGSI APP) ---

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const AddOrder = React.lazy(() => import("./pages/AddOrder"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<div className="p-5 font-bold">Loading...</div>}>
      <Routes>
        {/* Grup Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />

          {/* Error Routes */}
          <Route path="/400" element={<ErrorPage code="400" description="Bad Request." image="/img/400.png" />} />
          <Route path="/401" element={<ErrorPage code="401" description="Unauthorized." image="/img/401.png" />} />
          <Route path="/403" element={<ErrorPage code="403" description="Forbidden." image="/img/403.png" />} />
          <Route path="*" element={<ErrorPage code="404" description="Page not found." image="/img/404.png" />} />
        </Route>

        {/* Grup Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, WhatWeDo } from "../pages/index";
import Layout from "../pages/layout";


const AppRouting = () => {
    return (
      <HashRouter>
        <Routes>
          
          {/* Main Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate replace to={"home"} />} />
            <Route path="home" element={<Home/>} />
            <Route path="packages" element={<WhatWeDo/>} />
          </Route>
         
          {/* Not found */}
          <Route path="*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </HashRouter>
    );
  };
  
  export default AppRouting;
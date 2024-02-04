import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Home, WhatWeDo, Frontier, SafeHeights, Sanerv, WasteValLocus, MushUp, EquippedVentures,
  HabitatEstates,
  EdSanServ
} from "../pages/index";
import Layout from "../pages/layout";


const AppRouting = () => {
  return (
    <HashRouter>
      <Routes>

        {/* Main Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to={"home"} />} />
          <Route path="home" element={<Home />} />
          <Route path="packages" element={<WhatWeDo />} />
          <Route path="frontier" element={<Frontier />} />
          <Route path="safe_heights" element={<SafeHeights />} />
          <Route path="sanerv" element={<Sanerv />} />
          <Route path="waste" element={<WasteValLocus />} />
          <Route path="mushup" element={<MushUp />} />
          <Route path="equipped_ventures" element={<EquippedVentures />} />
          <Route path="habitat_estates" element={<HabitatEstates />} />
          <Route path="edsanserv" element={<EdSanServ />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouting;
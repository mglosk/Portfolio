import { Routes, Route, Navigate } from "react-router";

import Layout from "@/app/layout/Layout";
import Home from "@/app/pages/Home";
import Work from "@/app/pages/Work";
import RabanneCaseStudy from "@/app/pages/RabanneCaseStudy";
import ImpossibleFoodsCaseStudy from "@/app/pages/ImpossibleFoodsCaseStudy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/rabanne" element={<RabanneCaseStudy />} />
        <Route path="/work/impossible-foods" element={<ImpossibleFoodsCaseStudy />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

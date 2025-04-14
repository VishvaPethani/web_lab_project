import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import LoginPage from "./components/login";


// MEN - TOPWEAR
import Tshirts from "./category/men/topwear/tshirts";
import TshirtsDetails from "./category/men/topwear/tshirtsDetails";
import Shirts from "./category/men/topwear/shirts";
import Sweaters from "./category/men/topwear/sweaters";
import Jackets from "./category/men/topwear/jackets";
import Hoodies from "./category/men/topwear/hoodies";
import Coats from "./category/men/topwear/coats";

// MEN - BOTTOMWEAR
import Jeans from "./category/men/bottomwear/jeans";
import Joggers from "./category/men/bottomwear/joggers";
import Shorts from "./category/men/bottomwear/shorts";
import Cargos from "./category/men/bottomwear/cargos";
import Chinos from "./category/men/bottomwear/chinos";
import Trousers from "./category/men/bottomwear/trousers";

// MEN - FOOTWEAR
import CasualShoes from "./category/men/footwear/casual-shoes";
import FormalShoes from "./category/men/footwear/formal-shoes";
import Sneakers from "./category/men/footwear/sneakers";
import Sandals from "./category/men/footwear/sandals";
import FlipFlops from "./category/men/footwear/flipflops";
import SportsShoes from "./category/men/footwear/sports-shoes";

// MEN - ETHNICWEAR
import Kurtas from "./category/men/ethnicwear/kurtas";
import Sherwanis from "./category/men/ethnicwear/sherwanis";
import ModiJackets from "./category/men/ethnicwear/modi-jackets";
import Dhotis from "./category/men/ethnicwear/dhotis";
import EthnicSets from "./category/men/ethnicwear/ethnic-sets";
import Pathani from "./category/men/ethnicwear/pathani";

// MEN - SPORTSWEAR
import Accessories from "./category/men/sports-wear/accessories";
import GymWear from "./category/men/sports-wear/gym-wear";
import Jerseys from "./category/men/sports-wear/jerseys";
import SportsJackets from "./category/men/sports-wear/sports-jackets";
import SportsTshirt from "./category/men/sports-wear/sports-tshirt";
import TrackPants from "./category/men/sports-wear/track-pants";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

      <Route path="/login" element={<LoginPage />} />
        {/* MEN - TOPWEAR */}
        <Route path="/" element={<Body />} />
        <Route path="/men/topwear/tshirts" element={<Tshirts />} />
        <Route path="/men/topwear/tshirts/:id" element={<TshirtsDetails />} />
        <Route path="/men/topwear/shirts" element={<Shirts />} />
        <Route path="/men/topwear/sweaters" element={<Sweaters />} />
        <Route path="/men/topwear/jackets" element={<Jackets />} />
        <Route path="/men/topwear/hoodies" element={<Hoodies />} />
        <Route path="/men/topwear/coats" element={<Coats />} />

        {/* MEN - BOTTOMWEAR */}
        <Route path="/men/bottomwear/jeans" element={<Jeans />} />
        <Route path="/men/bottomwear/joggers" element={<Joggers />} />
        <Route path="/men/bottomwear/shorts" element={<Shorts />} />
        <Route path="/men/bottomwear/cargos" element={<Cargos />} />
        <Route path="/men/bottomwear/chinos" element={<Chinos />} />
        <Route path="/men/bottomwear/trousers" element={<Trousers />} />

        {/* MEN - FOOTWEAR */}
        <Route path="/men/footwear/casualshoes" element={<CasualShoes />} />
        <Route path="/men/footwear/formalshoes" element={<FormalShoes />} />
        <Route path="/men/footwear/sneakers" element={<Sneakers />} />
        <Route path="/men/footwear/sandals" element={<Sandals />} />
        <Route path="/men/footwear/flipflops" element={<FlipFlops />} />
        <Route path="/men/footwear/sports" element={<SportsShoes />} />

        {/* MEN - ETHNICWEAR */}
        <Route path="/men/ethnicwear/kurtas" element={<Kurtas />} />
        <Route path="/men/ethnicwear/sherwanis" element={<Sherwanis />} />
        <Route path="/men/ethnicwear/modi-jackets" element={<ModiJackets />} />
        <Route path="/men/ethnicwear/dhotis" element={<Dhotis />} />
        <Route path="/men/ethnicwear/ethnicsets" element={<EthnicSets />} />
        <Route path="/men/ethnicwear/pathani" element={<Pathani />} />


        {/* MEN - SPORTSWEAR */}
        <Route path="/men/sports-wear/accessories" element={<Accessories />} />
        <Route path="/men/sports-wear/gym-wear" element={<GymWear />} />
        <Route path="/men/sports-wear/jerseys" element={<Jerseys />} />
        <Route path="/men/sports-wear/sports-jackets" element={<SportsJackets />} />
        <Route path="/men/sports-wear/sports-tshirt" element={<SportsTshirt />} />
        <Route path="/men/sports-wear/track-pants" element={<TrackPants />} />

        {/* Add more for ethnicwear, footwear, etc., when ready */}
      </Routes>
      <Footer />
    </Router>
  );
}

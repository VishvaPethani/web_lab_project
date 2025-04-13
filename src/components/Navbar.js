import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search triggered");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm sticky-top">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        <img src="/images/logo1.png" alt="WardrobeHUB Logo" style={{ height: '40px' }} />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Men dropdown */}
          <li className="nav-item dropdown position-static">
            <Link className="nav-link" to="#">Men</Link>
            <div className="dropdown-menu w-95 mt-0 border-0 shadow-lg">
              <div className="d-flex p-3 flex-wrap">
                {/* Men sections */}
                <div className="me-5">
                  <h6 className="fw-bold">Topwear</h6>
                  <Link className="dropdown-item" to="/men/topwear/tshirts">T-Shirts</Link>
                  <Link className="dropdown-item" to="/men/topwear/shirts">Shirts</Link>
                  <Link className="dropdown-item" to="/men/topwear/jackets">Jackets</Link>
                  <Link className="dropdown-item" to="/men/topwear/hoodies">Hoodies</Link>
                  <Link className="dropdown-item" to="/men/topwear/sweaters">Sweaters</Link>
                  <Link className="dropdown-item" to="/men/topwear/coats">Coats</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Bottomwear</h6>
                  <Link className="dropdown-item" to="/men/bottomwear/jeans">Jeans</Link>
                  <Link className="dropdown-item" to="/men/bottomwear/trousers">Trousers</Link>
                  <Link className="dropdown-item" to="/men/bottomwear/shorts">Shorts</Link>
                  <Link className="dropdown-item" to="/men/bottomwear/joggers">Joggers</Link>
                  <Link className="dropdown-item" to="/men/bottomwear/cargos">Cargos</Link>
                  <Link className="dropdown-item" to="/men/bottomwear/chinos">Chinos</Link>

                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Ethnic Wear</h6>
                  <Link className="dropdown-item" to="/men/ethnicwear/kurtas">Kurtas</Link>
                  <Link className="dropdown-item" to="/men/ethnicwear/sherwanis">Sherwanis</Link>
                  <Link className="dropdown-item" to="/men/ethnicwear/modi-jackets">Modi Jackets</Link>
                  <Link className="dropdown-item" to="/men/ethnicwear/dhotis">Dhotis</Link>
                  <Link className="dropdown-item" to="/men/ethnicwear/ethnicsets">Ethnic Sets</Link>
                  <Link className="dropdown-item" to="/men/ethnicwear/pathani">Pathani</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Footwear</h6>
                  <Link className="dropdown-item" to="/men/footwear/casualshoes">Casual Shoes</Link>
                  <Link className="dropdown-item" to="/men/footwear/formalshoes">Formal Shoes</Link>
                  <Link className="dropdown-item" to="/men/footwear/sneakers">Sneakers</Link>
                  <Link className="dropdown-item" to="/men/footwear/sandals">Sandals</Link>
                  <Link className="dropdown-item" to="/men/footwear/flipflops">Flip Flops</Link>
                  <Link className="dropdown-item" to="/men/footwear/sports">Sports Shoes</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Sportswear</h6>
                  <Link className="dropdown-item" to="/men/sports-wear/sports-tshirts">Sports T-Shirts</Link>
                  <Link className="dropdown-item" to="/men/sports-wear/track-pants">Track Pants</Link>
                  <Link className="dropdown-item" to="/men/sports-wear/gym-wear">Gym Wear</Link>
                  <Link className="dropdown-item" to="/men/sports-wear/sports-jackets">Sports Jackets</Link>
                  <Link className="dropdown-item" to="/men/sports-wear/accessories">Accessories</Link>
                  <Link className="dropdown-item" to="/men/sports-wear/jerseys">Jerseys</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Women dropdown */}
          <li className="nav-item dropdown position-static">
            <Link className="nav-link" to="#">Women</Link>
            <div className="dropdown-menu w-95 mt-0 border-0 shadow-lg">
              <div className="d-flex p-3 flex-wrap">
                {/* Women sections */}
                <div className="me-5">
                  <h6 className="fw-bold">Topwear</h6>
                  <Link className="dropdown-item" to="/women/tshirts">T-Shirts</Link>
                  <Link className="dropdown-item" to="/women/tops">Tops</Link>
                  <Link className="dropdown-item" to="/women/blouses">Blouses</Link>
                  <Link className="dropdown-item" to="/women/kurthis">Kurtis</Link>
                  <Link className="dropdown-item" to="/women/dresses">Dresses</Link>
                  <Link className="dropdown-item" to="/women/sweaters">Sweaters</Link>
                  <Link className="dropdown-item" to="/women/jackets">Jackets</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Bottomwear</h6>
                  <Link className="dropdown-item" to="/women/jeans">Jeans</Link>
                  <Link className="dropdown-item" to="/women/skirts">Skirts</Link>
                  <Link className="dropdown-item" to="/women/shorts">Shorts</Link>
                  <Link className="dropdown-item" to="/women/trousers">Trousers</Link>
                  <Link className="dropdown-item" to="/women/leggings">Leggings</Link>
                  <Link className="dropdown-item" to="/women/jeggings">Jeggings</Link>
                  <Link className="dropdown-item" to="/women/culottes">Culottes</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Ethnic Wear</h6>
                  <Link className="dropdown-item" to="/women/kurtis">Kurtis</Link>
                  <Link className="dropdown-item" to="/women/sarees">Sarees</Link>
                  <Link className="dropdown-item" to="/women/lehenga">Lehenga</Link>
                  <Link className="dropdown-item" to="/women/salwar">Salwar</Link>
                  <Link className="dropdown-item" to="/women/ethnicsets">Ethnic Sets</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Footwear</h6>
                  <Link className="dropdown-item" to="/women/flats">Flats</Link>
                  <Link className="dropdown-item" to="/women/heels">Heels</Link>
                  <Link className="dropdown-item" to="/women/sandals">Sandals</Link>
                  <Link className="dropdown-item" to="/women/boots">Boots</Link>
                  <Link className="dropdown-item" to="/women/sneakers">Sneakers</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Sportswear</h6>
                  <Link className="dropdown-item" to="/women/sportstshirts">Sports T-Shirts</Link>
                  <Link className="dropdown-item" to="/women/sportsbras">Sports Bras</Link>
                  <Link className="dropdown-item" to="/women/gymwear">Gym Wear</Link>
                  <Link className="dropdown-item" to="/women/trackpants">Track Pants</Link>
                  <Link className="dropdown-item" to="/women/sportsleggings">Sports Leggings</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Kids dropdown */}
            <li className="nav-item dropdown position-static">
                <Link className="nav-link" to="#">Kids</Link>
                <div className="dropdown-menu w-80 mt-0 border-0 shadow-lg">
                <div className="d-flex p-3 flex-wrap">
                {/* Kids sections */}
                <div className="me-5">
                <h6 className="fw-bold">Boys Topwear</h6>
                <Link className="dropdown-item" to="/kids/boytshirts">T-Shirts</Link>
                <Link className="dropdown-item" to="/kids/boyshirts">Shirts</Link>
                <Link className="dropdown-item" to="/kids/boyhoodies">Hoodies</Link>
                <Link className="dropdown-item" to="/kids/boysweaters">Sweaters</Link>
                </div>
                <div className="me-5">
                    <h6 className="fw-bold">Girls Topwear</h6>
                    <Link className="dropdown-item" to="/kids/girltshirts">T-Shirts</Link>
                    <Link className="dropdown-item" to="/kids/girldresses">Dresses</Link>
                    <Link className="dropdown-item" to="/kids/girlhoodies">Hoodies</Link>
                    <Link className="dropdown-item" to="/kids/girlsweaters">Sweaters</Link>
                    
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Bottomwear</h6>
                        <Link className="dropdown-item" to="/kids/boyjeans">Jeans</Link>
                        <Link className="dropdown-item" to="/kids/boyshorts">Shorts</Link>
                        <Link className="dropdown-item" to="/kids/boyjoggers">Joggers</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Bottomwear</h6>
                        <Link className="dropdown-item" to="/kids/girljeans">Jeans</Link>
                        <Link className="dropdown-item" to="/kids/girlskirt">Skirt</Link>
                        <Link className="dropdown-item" to="/kids/girlshorts">Shorts</Link>  
                    </div>
                    {/* Footwear section */} 
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Footwear</h6>
                        <Link className="dropdown-item" to="/kids/boycasualshoes">Casual Shoes</Link>
                        <Link className="dropdown-item" to="/kids/boyformals">Formal Shoes</Link>
                        <Link className="dropdown-item" to="/kids/boysneakers">Sneakers</Link>
                        <Link className="dropdown-item" to="/kids/boysandals">Sandals</Link>
                        <Link className="dropdown-item" to="/kids/boyflipflops">Flipflops</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Footwear</h6>
                        <Link className="dropdown-item" to="/kids/girlcasualshoes">Casual Shoes</Link>
                        <Link className="dropdown-item" to="/kids/girlformals">Formal Shoes</Link>
                        <Link className="dropdown-item" to="/kids/girlsneakers">Sneakers</Link>
                        <Link className="dropdown-item" to="/kids/girlsandals">Sandals</Link>
                        <Link className="dropdown-item" to="/kids/girlflipflops">Flipflops</Link>
                    </div>
                    {/* Ethnic Wear section */}
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Ethnic Wear</h6>
                        <Link className="dropdown-item" to="/kids/boykurta">Kurta</Link>
                        <Link className="dropdown-item" to="/kids/boysherwani">Sherwani</Link>
                        <Link className="dropdown-item" to="/kids/boypathani">Pathani</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Ethnic Wear</h6>
                        <Link className="dropdown-item" to="/kids/girlkurta">Kurta</Link>
                        <Link className="dropdown-item" to="/kids/girlsaree">Saree</Link>
                        <Link className="dropdown-item" to="/kids/girllehenga">Lehenga</Link>
                    </div>
                </div>
            </div>
        </li>

          {/* Accessories dropdown */}
          <li className="nav-item dropdown position-static">
            <Link className="nav-link" to="#">Accessories</Link>
            <div className="dropdown-menu w-95 mt-0 border-0 shadow-lg">
              <div className="d-flex p-3 flex-wrap">
                {/* Accessories sections */}
                <div className="me-5">
                  <h6 className="fw-bold">Bags</h6>
                  <Link className="dropdown-item" to="/accessories/backpacks">Backpacks</Link>
                  <Link className="dropdown-item" to="/accessories/handbags">Handbags</Link>
                  <Link className="dropdown-item" to="/accessories/clutches">Clutches</Link>
                  <Link className="dropdown-item" to="/accessories/laptopbags">Laptop Bags</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Jewellery</h6>
                  <Link className="dropdown-item" to="/accessories/necklaces">Necklaces</Link>
                  <Link className="dropdown-item" to="/accessories/earrings">Earrings</Link>
                  <Link className="dropdown-item" to="/accessories/bracelets">Bracelets</Link>
                  <Link className="dropdown-item" to="/accessories/rings">Rings</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Watches</h6>
                  <Link className="dropdown-item" to="/accessories/menswatches">Men's Watches</Link>
                  <Link className="dropdown-item" to="/accessories/womenswatches">Women's Watches</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Belts</h6>
                  <Link className="dropdown-item" to="/accessories/mensbelts">Men's Belts</Link>
                  <Link className="dropdown-item" to="/accessories/womensbelts">Women's Belts</Link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <form className="d-flex align-items-center me-4" onSubmit={handleSearch}>
          <input
            className="form-control rounded-pill me-2"
            type="search"
            placeholder="Search products here"
          />
          <button type="submit" className="btn p-0 border-0 me-3 bg-transparent">
            <FaSearch size={20} style={{ cursor: 'pointer' }} />
          </button>
        </form>

        <div className="d-flex align-items-center text-center">
          <Link to="/wishlist" className="btn me-0 d-flex flex-column align-items-center">
            <FaHeart size={20} />
            <small>Wishlist</small>
          </Link>
          <Link to="/login" className="btn me-0 d-flex flex-column align-items-center">
            <FaUser size={20} />
            <small>Account</small>
          </Link>
          <Link to="/cart" className="btn d-flex flex-column align-items-center">
            <FaShoppingCart size={20} />
            <small>Cart</small>
          </Link>
        </div>
      </div>

      <style>{`
        .nav-item.dropdown:hover .dropdown-menu {
          display: block !important;
        }
      
        .w-80 {
        width: 80% !important;
        }`}</style>
    </nav>

    
  );
}

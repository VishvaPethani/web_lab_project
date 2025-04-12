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
                  <Link className="dropdown-item" to="/category/men/tshirts">T-Shirts</Link>
                  <Link className="dropdown-item" to="/category/men/shirts">Shirts</Link>
                  <Link className="dropdown-item" to="/category/men/jackets">Jackets</Link>
                  <Link className="dropdown-item" to="/category/men/hoodies">Hoodies</Link>
                  <Link className="dropdown-item" to="/category/men/sweaters">Sweaters</Link>
                  <Link className="dropdown-item" to="/category/men/coats">Coats</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Bottomwear</h6>
                  <Link className="dropdown-item" to="/category/men/jeans">Jeans</Link>
                  <Link className="dropdown-item" to="/category/men/trousers">Trousers</Link>
                  <Link className="dropdown-item" to="/category/men/shorts">Shorts</Link>
                  <Link className="dropdown-item" to="/category/men/joggers">Joggers</Link>
                  <Link className="dropdown-item" to="/category/men/cargos">Cargos</Link>
                  <Link className="dropdown-item" to="/category/men/chinos">Chinos</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Ethnic Wear</h6>
                  <Link className="dropdown-item" to="/category/men/kurtas">Kurtas</Link>
                  <Link className="dropdown-item" to="/category/men/sherwanis">Sherwanis</Link>
                  <Link className="dropdown-item" to="/category/men/nehrujackets">Nehru Jackets</Link>
                  <Link className="dropdown-item" to="/category/men/dhotis">Dhotis</Link>
                  <Link className="dropdown-item" to="/category/men/ethnicsets">Ethnic Sets</Link>
                  <Link className="dropdown-item" to="/category/men/pathan">Pathani</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Footwear</h6>
                  <Link className="dropdown-item" to="/category/men/casualshoes">Casual Shoes</Link>
                  <Link className="dropdown-item" to="/category/men/formalshoes">Formal Shoes</Link>
                  <Link className="dropdown-item" to="/category/men/sneakers">Sneakers</Link>
                  <Link className="dropdown-item" to="/category/men/sandals">Sandals</Link>
                  <Link className="dropdown-item" to="/category/men/flipflops">Flip Flops</Link>
                  <Link className="dropdown-item" to="/category/men/sports">Sports Shoes</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Sportswear</h6>
                  <Link className="dropdown-item" to="/category/men/sportstshirts">Sports T-Shirts</Link>
                  <Link className="dropdown-item" to="/category/men/trackpants">Track Pants</Link>
                  <Link className="dropdown-item" to="/category/men/gymwear">Gym Wear</Link>
                  <Link className="dropdown-item" to="/category/men/sportsjackets">Sports Jackets</Link>
                  <Link className="dropdown-item" to="/category/men/sportsaccessories">Accessories</Link>
                  <Link className="dropdown-item" to="/category/men/jerseys">Jerseys</Link>
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
                  <Link className="dropdown-item" to="/category/women/tshirts">T-Shirts</Link>
                  <Link className="dropdown-item" to="/category/women/tops">Tops</Link>
                  <Link className="dropdown-item" to="/category/women/blouses">Blouses</Link>
                  <Link className="dropdown-item" to="/category/women/kurthis">Kurtis</Link>
                  <Link className="dropdown-item" to="/category/women/dresses">Dresses</Link>
                  <Link className="dropdown-item" to="/category/women/sweaters">Sweaters</Link>
                  <Link className="dropdown-item" to="/category/women/jackets">Jackets</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Bottomwear</h6>
                  <Link className="dropdown-item" to="/category/women/jeans">Jeans</Link>
                  <Link className="dropdown-item" to="/category/women/skirts">Skirts</Link>
                  <Link className="dropdown-item" to="/category/women/shorts">Shorts</Link>
                  <Link className="dropdown-item" to="/category/women/trousers">Trousers</Link>
                  <Link className="dropdown-item" to="/category/women/leggings">Leggings</Link>
                  <Link className="dropdown-item" to="/category/women/jeggings">Jeggings</Link>
                  <Link className="dropdown-item" to="/category/women/culottes">Culottes</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Ethnic Wear</h6>
                  <Link className="dropdown-item" to="/category/women/kurtis">Kurtis</Link>
                  <Link className="dropdown-item" to="/category/women/sarees">Sarees</Link>
                  <Link className="dropdown-item" to="/category/women/lehenga">Lehenga</Link>
                  <Link className="dropdown-item" to="/category/women/salwar">Salwar</Link>
                  <Link className="dropdown-item" to="/category/women/ethnicsets">Ethnic Sets</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Footwear</h6>
                  <Link className="dropdown-item" to="/category/women/flats">Flats</Link>
                  <Link className="dropdown-item" to="/category/women/heels">Heels</Link>
                  <Link className="dropdown-item" to="/category/women/sandals">Sandals</Link>
                  <Link className="dropdown-item" to="/category/women/boots">Boots</Link>
                  <Link className="dropdown-item" to="/category/women/sneakers">Sneakers</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Sportswear</h6>
                  <Link className="dropdown-item" to="/category/women/sportstshirts">Sports T-Shirts</Link>
                  <Link className="dropdown-item" to="/category/women/sportsbras">Sports Bras</Link>
                  <Link className="dropdown-item" to="/category/women/gymwear">Gym Wear</Link>
                  <Link className="dropdown-item" to="/category/women/trackpants">Track Pants</Link>
                  <Link className="dropdown-item" to="/category/women/sportsleggings">Sports Leggings</Link>
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
                <Link className="dropdown-item" to="/category/kids/boytshirts">T-Shirts</Link>
                <Link className="dropdown-item" to="/category/kids/boyshirts">Shirts</Link>
                <Link className="dropdown-item" to="/category/kids/boyhoodies">Hoodies</Link>
                <Link className="dropdown-item" to="/category/kids/boysweaters">Sweaters</Link>
                </div>
                <div className="me-5">
                    <h6 className="fw-bold">Girls Topwear</h6>
                    <Link className="dropdown-item" to="/category/kids/girltshirts">T-Shirts</Link>
                    <Link className="dropdown-item" to="/category/kids/girldresses">Dresses</Link>
                    <Link className="dropdown-item" to="/category/kids/girlhoodies">Hoodies</Link>
                    <Link className="dropdown-item" to="/category/kids/girlsweaters">Sweaters</Link>
                    
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Bottomwear</h6>
                        <Link className="dropdown-item" to="/category/kids/boyjeans">Jeans</Link>
                        <Link className="dropdown-item" to="/category/kids/boyshorts">Shorts</Link>
                        <Link className="dropdown-item" to="/category/kids/boyjoggers">Joggers</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Bottomwear</h6>
                        <Link className="dropdown-item" to="/category/kids/girljeans">Jeans</Link>
                        <Link className="dropdown-item" to="/category/kids/girlskirt">Skirt</Link>
                        <Link className="dropdown-item" to="/category/kids/girlshorts">Shorts</Link>  
                    </div>
                    {/* Footwear section */} 
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Footwear</h6>
                        <Link className="dropdown-item" to="/category/kids/boycasualshoes">Casual Shoes</Link>
                        <Link className="dropdown-item" to="/category/kids/boyformals">Formal Shoes</Link>
                        <Link className="dropdown-item" to="/category/kids/boysneakers">Sneakers</Link>
                        <Link className="dropdown-item" to="/category/kids/boysandals">Sandals</Link>
                        <Link className="dropdown-item" to="/category/kids/boyflipflops">Flipflops</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Footwear</h6>
                        <Link className="dropdown-item" to="/category/kids/girlcasualshoes">Casual Shoes</Link>
                        <Link className="dropdown-item" to="/category/kids/girlformals">Formal Shoes</Link>
                        <Link className="dropdown-item" to="/category/kids/girlsneakers">Sneakers</Link>
                        <Link className="dropdown-item" to="/category/kids/girlsandals">Sandals</Link>
                        <Link className="dropdown-item" to="/category/kids/girlflipflops">Flipflops</Link>
                    </div>
                    {/* Ethnic Wear section */}
                    <div className="me-5">
                        <h6 className="fw-bold">Boys Ethnic Wear</h6>
                        <Link className="dropdown-item" to="/category/kids/boykurta">Kurta</Link>
                        <Link className="dropdown-item" to="/category/kids/boysherwani">Sherwani</Link>
                        <Link className="dropdown-item" to="/category/kids/boypathani">Pathani</Link>
                    </div>
                    <div className="me-5">
                        <h6 className="fw-bold">Girls Ethnic Wear</h6>
                        <Link className="dropdown-item" to="/category/kids/girlkurta">Kurta</Link>
                        <Link className="dropdown-item" to="/category/kids/girlsaree">Saree</Link>
                        <Link className="dropdown-item" to="/category/kids/girllehenga">Lehenga</Link>
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
                  <Link className="dropdown-item" to="/category/accessories/backpacks">Backpacks</Link>
                  <Link className="dropdown-item" to="/category/accessories/handbags">Handbags</Link>
                  <Link className="dropdown-item" to="/category/accessories/clutches">Clutches</Link>
                  <Link className="dropdown-item" to="/category/accessories/laptopbags">Laptop Bags</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Jewellery</h6>
                  <Link className="dropdown-item" to="/category/accessories/necklaces">Necklaces</Link>
                  <Link className="dropdown-item" to="/category/accessories/earrings">Earrings</Link>
                  <Link className="dropdown-item" to="/category/accessories/bracelets">Bracelets</Link>
                  <Link className="dropdown-item" to="/category/accessories/rings">Rings</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Watches</h6>
                  <Link className="dropdown-item" to="/category/accessories/menswatches">Men's Watches</Link>
                  <Link className="dropdown-item" to="/category/accessories/womenswatches">Women's Watches</Link>
                </div>
                <div className="me-5">
                  <h6 className="fw-bold">Belts</h6>
                  <Link className="dropdown-item" to="/category/accessories/mensbelts">Men's Belts</Link>
                  <Link className="dropdown-item" to="/category/accessories/womensbelts">Women's Belts</Link>
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

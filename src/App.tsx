import "./App.css"
import Header from "./components/Header/Header.tsx";
import HeroBanner from "./components/HeroBanner/HeroBanner.tsx";
import CategoriesCarousel from "./components/CategoriesCarousel/CategoriesCarousel.tsx";
import SizeFilter from "./components/SizeFilter/SizeFilter.tsx";
import BrandsHighlight from "./components/BrandsHighlight/BrandsHighlight.tsx";
import ProductsSection from "./components/ProductsSection/ProductsSection.tsx";
import BrandsShowcase from "./components/BrandsShowcase/BrandsShowcase.tsx";
import NewArrivals from "./components/NewArrivals/NewArrivals.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

function App() {

  return (
    <>
      <Header/>
      <main className="App">
        <HeroBanner/>
        <div className="discountBanner">
          <p>10% Na primeira compra</p>
        </div>
        <div className="gray-background-area">
          <CategoriesCarousel/>
          <SizeFilter/>
          <BrandsHighlight/>
          <ProductsSection/>
        </div>
        <BrandsShowcase/>
        <NewArrivals/>
      </main>
      <NavBar/>
    </>
  )
}

export default App
import "./App.css"
import Header from "./components/Header/Header.tsx";
import HeroBanner from "./components/HeroBanner/HeroBanner.tsx";
import CategoriesCarousel from "./components/CategoriesCarousel/CategoriesCarousel.tsx";
import SizeFilter from "./components/SizeFilter/SizeFilter.tsx";

function App() {

  return (
    <>
      <Header/>
      <main className="App">
        <HeroBanner/>
        <div className="discountBanner">
          <p>10% Na primeira compra</p>
        </div>
        <CategoriesCarousel/>
        <SizeFilter/>
      </main>
    </>
  )
}

export default App

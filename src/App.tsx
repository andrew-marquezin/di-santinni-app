import "./App.css"
import Header from "./components/Header/Header.tsx";
import HeroBanner from "./components/HeroBanner/HeroBanner.tsx";
import CategoriesCarousel from "./components/CategoriesCarousel/CategoriesCarousel.tsx";

function App() {

  return (
    <>
      <Header/>
      <main className="App">
        <HeroBanner/>
        <div className="discountBanner">
          <p>10% Na primeira compra</p>
        </div>
        <section>
          <div>
            <CategoriesCarousel/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

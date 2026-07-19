import "./App.css"
import Header from "./components/Header/Header.tsx";
import HeroBanner from "./components/HeroBanner/HeroBanner.tsx";

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
          <h3>NOSSOS PRODUTOS</h3>
          <div>

          </div>
        </section>
      </main>
    </>
  )
}

export default App

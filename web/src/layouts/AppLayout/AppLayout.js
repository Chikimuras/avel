import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

const AppLayout = ({ children }) => {
  return (
  <>
    <div className="container mx-auto">
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>)
}

export default AppLayout

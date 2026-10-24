import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Process from "./components/Process/Process";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const ProductDetailsRoute = () => {
  const { productId } = useParams();
  return <ProductDetails key={productId} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailsRoute />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

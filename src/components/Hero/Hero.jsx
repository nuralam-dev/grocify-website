import { Link } from "react-router-dom";
import heroImg from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen flex md:flex-row flex-col items-center max-w-7xl mx-auto px-10 md:pt-25 pt-35">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-amber-100 text-orange-500 text-lg rounded-full px-5 py-2">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>
          <p className="text-zinc-600 text-lg mt-[5px] mb-[10px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Link to="/products" className="inline-block">
            <Button content="Shop Now" />
          </Link>
        </div>
        {/* hero img */}
        <div className="flex-1">
          <img src={heroImg} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

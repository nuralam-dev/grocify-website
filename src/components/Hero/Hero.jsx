import heroImg from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center max-w-7xl mx-auto px-10">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-amber-100 text-orange-500 text-lg rounded-full px-5 py-2">
            Export Best Quality...
          </span>
          <h1 className="text-7xl font-bold">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>
          <p className="text-zinc-600 text-lg">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now"></Button>
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

import ServiceCard from "../../components/service-cards";
import "./index.css";

const Checkout = () => {
  const services = [
    {
      service: "HAIRCUT",
      price: 25,
      desc: ["Fade (Skin - 5)", "Taper (Skin - 5)", "Trim or Shearwork"],
    },
    {
      service: "HAIRCUT & BEARD",
      price: 35,
      desc: ["Haircut", "Beard Trim", "Razor Lineup"],
    },
    {
      service: "LINEUP",
      price: 5,
      desc: ["Clipper Linep", "Neck Shape-Up", "Razor Lineup"],
    },
  ];

  return (
    <div className="checkout">
      {services.map((item, idx) => {
        return (
          <ServiceCard
            key={idx}
            service={item.service}
            price={item.price}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default Checkout;

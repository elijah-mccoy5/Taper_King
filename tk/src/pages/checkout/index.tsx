import ServiceCard from "../../components/service-cards";
import "./index.css";
// import { db } from "../../firebase";

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
  const times = [
    "9:00",
    "9:45",
    "10:30",
    "11:15",
    "12:00",
    "12:45",
    "1:30",
    "2:15",
    "3:00",
    "3:45",
  ];
  // const handleTimePick = async () =>
  //   await db.collection("appointments").add({
  //     name: "Mike",
  //     date: "",
  //   });
  return (
    <div className="checkout">
      {services.map((item, idx) => {
        return (
          <ServiceCard
            key={idx}
            service={item.service}
            price={item.price}
            desc={item.desc}
            times={times}
          />
        );
      })}
    </div>
  );
};

export default Checkout;

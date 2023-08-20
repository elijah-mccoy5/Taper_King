import "./index.css";

interface ServiceCardProps {
  service: string;
  price: number;
  desc: Array<string>;
}
const ServiceCard = ({ service, price, desc }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="top">
        <h1>{service}</h1>
        <h1>💲{price}</h1>
      </div>
      <div className="description">
        {desc.map((item) => (
          <p>✅ {item}</p>
        ))}
      </div>
      <button className="service-button">Book</button>
    </div>
  );
};

export default ServiceCard;

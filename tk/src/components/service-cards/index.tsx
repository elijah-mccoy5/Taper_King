import "./index.css";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";

interface ServiceCardProps {
  service: string;
  price: number;
  desc: Array<string>;
  times: Array<string>;
}
const ServiceCard = ({ service, price, desc, times }: ServiceCardProps) => {
  const [date, setDate] = useState<object | null>({});
  return (
    <div className="service-card">
      <div className="top">
        <h1>{service}</h1>
        <h1>💲{price}</h1>
      </div>
      <div className="mid">
        <div className="description">
          {desc.map((item, idx) => (
            <p key={idx}>⭐ {item}</p>
          ))}
        </div>
        <div className="date">
          <h2>📆 What day?</h2>
          <MobileDatePicker
            className="date-picker"
            onAccept={(e) => {
              setDate(e);
            }}
            disablePast
            defaultValue={dayjs(Date.now())}
          />
        </div>
      </div>
      <div className="time-button-container">
        {times.map((item, idx) => {
          return (
            <button key={idx} className="time-button">
              {item}
            </button>
          );
        })}
      </div>
      <button onClick={() => console.log(date)} className="service-button">
        Book Appointment
      </button>
    </div>
  );
};

export default ServiceCard;

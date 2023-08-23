import "./index.css";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { db, auth } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

interface ServiceCardProps {
  service: string;
  price: number;
  desc: Array<string>;
}

const ServiceCard = ({ service, price, desc }: ServiceCardProps) => {
  const user = auth.currentUser;
  const [dateTime, setDateTime] = useState<{
    date: string | undefined;
    name?: string | null | undefined;
    service?: string | undefined;
    time?: string | undefined;
  }>({
    name: user?.displayName,
    service: service,
    date: "",
    time: "",
  });

  const [isBooked, setIsBooked] = useState(false);
  const availableTimes = [
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
  const formRef = collection(db, "appointments");

  const handleCreateAppointment = async () => {
    await addDoc(formRef, dateTime);
    setIsBooked(true);
    console.log(dateTime.date);
  };

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
              setDateTime({ ...dateTime, date: e?.format("MM/DD/YYYY") });
            }}
            disablePast
            defaultValue={dayjs(Date.now())}
          />
        </div>
      </div>
      <div className="time-button-container">
        {availableTimes.map((item, idx) => {
          return (
            <button
              onClick={() => {
                setDateTime({ ...dateTime, time: item });
              }}
              key={idx}
              className="time-button"
            >
              {item}
            </button>
          );
        })}
      </div>
      {isBooked ? (
        <p className="booked">
          You booked for {dateTime.date} at {dateTime.time}
        </p>
      ) : (
        <button onClick={handleCreateAppointment} className="service-button">
          Book Appointment
        </button>
      )}
    </div>
  );
};

export default ServiceCard;

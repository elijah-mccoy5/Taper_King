import "./index.css";
import { useEffect, useState } from "react";
import { db, auth } from "../../../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import ServiceDatePicker from "../service-datepicker";
import ServiceTimes from "../service-times";

interface ServiceCardProp {
  service: string;
  price: number;
  desc: Array<string>;
}

const ServiceCard = ({ service, price, desc }: ServiceCardProp) => {
  const user = auth.currentUser;

  const formRef = collection(db, "appointments");

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

  const [isBooked, setIsBooked] = useState(false);

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

  const handleCreateAppointment = async () => {
    await addDoc(formRef, dateTime);
    setIsBooked(true);
  };

  const handleSetDate = (value: string | undefined) => {
    setDateTime({ ...dateTime, date: value });
  };

  const handleSetTime = (value: string | undefined) => {
    setDateTime({ ...dateTime, time: value });
  };

  const appointmentRef = collection(db, "appointments");

  const getAppointments = () => {
    onSnapshot(appointmentRef, (snapshot) => {
      snapshot.docs.map((doc) => ({
        date: doc.get("date"),
        time: doc.get("time"),
      }));
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);

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
        <ServiceDatePicker handleSetDate={handleSetDate} />
      </div>
      <ServiceTimes
        availableTimes={availableTimes}
        handleSetTime={handleSetTime}
      />
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

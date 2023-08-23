import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./index.css";

interface adminProps {
  admin: boolean;
}

const Admin = ({ admin }: adminProps) => {
  const [appointments, setAppointment] = useState<
    { name: string; date: string; time: string }[]
  >([]);

  const appointmentRef = collection(db, "appointments");

  const getAppointments = async () => {
    onSnapshot(appointmentRef, (snapshot) => {
      setAppointment(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          name: doc.get("name"),
          date: doc.get("date"),
          time: doc.get("time"),
        }))
      );
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="admin">
      {admin ? (
        <div className="schedule">
          <h1>📆 Schedule</h1>
          <div className="appointment-container">
            {appointments.map((item) => {
              return (
                <div className="appoint">
                  <div className="appoint-top">
                    <p>📆 </p>
                    <p>⏰</p>
                    <p>👾</p>
                  </div>
                  <div className="appoint-bottom">
                    <h2>{item["date"]}</h2>
                    <p className="appoint-time">{item.time}</p>
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>I dont know you like that</h1>
      )}
    </div>
  );
};

export default Admin;

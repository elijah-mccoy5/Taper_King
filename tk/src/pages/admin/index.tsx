import ScheduleCard from "../../components/schedule-card";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";

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
  return <ScheduleCard admin={admin} appointments={appointments} />;
};

export default Admin;

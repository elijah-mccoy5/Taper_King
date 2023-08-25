import "./index.css";
import { v4 } from "uuid";

interface ScheduleCardProps {
  admin: boolean;
  appointments: { name: string; date: string; time: string }[];
}

const ScheduleCard = ({ admin, appointments }: ScheduleCardProps) => {
  return (
    <div className="admin">
      {admin ? (
        <div className="schedule">
          <h1>📆 Schedule</h1>
          <div className="appointment-container">
            {appointments.map((item) => {
              return (
                <div key={v4()} className="appoint">
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

export default ScheduleCard;

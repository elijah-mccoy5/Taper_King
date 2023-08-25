interface ServiceTimesProps {
  handleSetTime: (value: string) => void;
  availableTimes: string[];
}
const ServiceTimes = ({ handleSetTime, availableTimes }: ServiceTimesProps) => {
  return (
    <div className="time-button-container">
      {availableTimes.map((item, idx) => {
        return (
          <button
            onClick={() => {
              handleSetTime(item);
            }}
            key={idx}
            className="time-button"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ServiceTimes;

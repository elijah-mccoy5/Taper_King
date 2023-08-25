import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface DatePickerProps {
  handleSetDate: (value: string | undefined) => void;
}

const ServiceDatePicker = ({ handleSetDate }: DatePickerProps) => {
  return (
    <div className="date">
      <h2>📆 What day?</h2>
      <MobileDatePicker
        className="date-picker"
        onAccept={(e) => {
          handleSetDate(e?.format("MM/DD/YYYY"));
        }}
        disablePast
        defaultValue={dayjs(Date.now())}
      />
    </div>
  );
};

export default ServiceDatePicker;

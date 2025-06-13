import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateSelector = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
        <label>
            Select a Date:
        </label>
        <DatePicker
        id="datePicker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="border border-pink-500 rounded-lg py-2 px-4 w-full"
        placeholderText="Select a date"
        />
    </div>
  );
};

export default MyDateSelector;
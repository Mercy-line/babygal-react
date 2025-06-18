import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateSelector = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
        <label>
             <DatePicker
        id="datePicker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="border border-pink-200 rounded-lg py-2 px-4 font-serif"
        placeholderText="mm/dd/yyyy"
        />
        </label>
       
    </div>
  );
};

export default MyDateSelector;
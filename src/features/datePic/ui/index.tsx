import React from "react";

interface IDatePicProps {
    selectDate: string;
    onDateChange: (date: string) => void;
}

const DatePic: React.FC<IDatePicProps> = ({selectDate, onDateChange}) => {
    return (
        <div className="flex items-center gap-2">
            <label className="text-lg text-gray-600" htmlFor="date">Выберите дату:</label>
            <input
                id="date"
                type="date"
                value={selectDate}
                onChange={(event) => onDateChange(event.target.value)}
                className="border rounded px-3 py-2 text-gray-600"
            />
        </div>
    )
};
export default DatePic;
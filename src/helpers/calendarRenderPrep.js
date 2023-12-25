import { 
    fullMonths, 
    threeLettersWeekDays } from "../data/calendar";

const findWeekDay = (y, m, d) => {
    return new Date(y, m, d).getDay();
}
const findTotalMonthDays = (y, m, d) => {
    return new Date(y, m, d).getDate();
}
const prepareDateStringForDisplay = (date) => {
    let dateForDisplay;
    const dayOfTheWeek = threeLettersWeekDays[date.getDay()];
    const month = fullMonths[date.getMonth()].title.slice(0, 3);
    const day = date.getDate();
    dateForDisplay = dayOfTheWeek + ", " + month + " " + day;

    return dateForDisplay;
}
const findActiveMonthId = (activeMonth) => {
    let activeMonthId;
    for (let i = 0; i < fullMonths.length; i++) {
       if (fullMonths[i].title === activeMonth) {
            activeMonthId = fullMonths[i].id
        }
    }
    return activeMonthId
}

export {
    findWeekDay,
    findTotalMonthDays,
    prepareDateStringForDisplay,
    findActiveMonthId
}
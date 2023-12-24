const findWeekDay = (y, m, d) => {
    return new Date(y, m, d).getDay();
}
const findTotalMonthDays = (y, m, d) => {
    return new Date(y, m, d).getDate();
}

export {
    findWeekDay,
    findTotalMonthDays
}
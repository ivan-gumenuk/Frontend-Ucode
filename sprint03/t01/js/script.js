function dayByWord(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Error input"
  }
}

function getFormattedDate(dateObject) {
  if (typeof dateObject === "object" && dateObject != "Invalid Date" && dateObject != null) {
    const day = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() + 1 < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const weekDay = dayByWord(dateObject.getDay());
    const hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours();
    const min = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes();

    return `${day}.${month}.${year} ${hour}:${min} ${weekDay}`;
  }
  else
    return "Invalid Date"
}

// const date0 = new Date(1993, 11, 1);
// const date1 = new Date(1998, 0, -33);
// const date2 = new Date('42 03:24:00');
// const date3 = new Date('error case');

// console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
// console.log(getFormattedDate(date3));
// console.log(getFormattedDate(null));
export const sleep = async (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const months_shortened = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const date_extract = (date, end_date) => {
  if (end_date) {
    let started = new Date(date),
      end = new Date(end_date);
    if (end.getTime() < started.getTime()) {
      end = "Present";
    } else {
      end = `${months_shortened[end.getMonth()]} ${end.getFullYear()}`;
    }
    started = `${
      months_shortened[started.getMonth()]
    } ${started.getFullYear()}`;
    return [started, end];
  } else {
    let time,
      now = new Date(),
      posted = new Date(date);
    if (now.getTime() - 1000 * 60 * 60 * 24 < posted.getTime()) {
      time = `${posted.getHours()}:${posted.getMinutes()}`;
      now.setHours(0, 0, 0, 0);
      if (now.getTime() > posted.getTime()) time = "Yesterday";
    } else if (now.getFullYear() === posted.getFullYear()) {
      time = `${months_shortened[posted.getMonth()]} ${posted.getDate()}`;
    } else {
      time = `${posted.getFullYear()} ${months[posted.getMonth()]}`;
    }
    return time;
  }
};

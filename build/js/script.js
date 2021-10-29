let currentDate = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

htmlCalendar(month, year);

function htmlCalendar(month, year) {
  let calendarYear = document.querySelector('.calendar-year');
  let calendarMonth = document.querySelector('.calendar-month');
  calendarYear.textContent = year;
  calendarMonth.textContent = monthNames[month];

  let calendarDayList = document.querySelector('.calendar').querySelectorAll('td');
  let date = new Date(year, month, 1);
  let day = date.getDate() - date.getDay() + 1;
  let flag = 0;

  for (let i = 0; i < 42; i++) {
    if (i === 35) {
      date.setFullYear(year, month, day);
      if (month !== date.getMonth()) {
        flag = 1;
      }
    }

    if (flag === 1) {
      calendarDayList[i].textContent = '';
    } else {
      date.setFullYear(year, month, day++);
      calendarDayList[i].textContent = date.getDate();
      calendarDayList[i].style.color = getColor(date, month);
    }
  }
}

function getColor(date, month) {
  if (date.getDay() === 0 || date.getDay() === 6) return 'red';
  else if (month != date.getMonth()) return 'blue';
  else return 'black';
}

document.querySelector('.previous-month').addEventListener('click', () => {
  month -= 1;
  if (month < 0) {
    month = 11;
    year -= 1;
  }
  htmlCalendar(month, year);
});

document.querySelector('.next-month').addEventListener('click', () => {
  month += 1;
  if (month > 11) {
    month = 0;
    year += 1;
  }
  htmlCalendar(month, year);
});

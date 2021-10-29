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
  let i = 0;

  for (i; i < 35; i++) {
    date.setFullYear(year, month, day++);
    calendarDayList[i].textContent = date.getDate();
    calendarDayList[i].style.color = getColor(date,month);
  }

  date.setDate(day);
  if (month === date.getMonth()) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    document.querySelector('.calendar').querySelector('table').append(newRow);
    calendarDayList = document.querySelector('.calendar').querySelectorAll('td');

    for (i; i < 42; i++) {
      date.setFullYear(year, month, day++);
      calendarDayList[i].textContent = date.getDate();
      calendarDayList[i].style.color = getColor(date,month);
    }
  } else {
    if (document.querySelector('.calendar').querySelector('table').rows.length === 7) {
      document.querySelector('.calendar').querySelector('table').deleteRow(6);
    }
  }
}

function getColor(date, month){
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

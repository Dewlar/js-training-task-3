let date = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = date.getMonth();
let year = date.getFullYear();

htmlCalendar(month, year);

function htmlCalendar(month, year) {
  let calendarYear = document.querySelector('.calendar-year');
  let calendarMonth = document.querySelector('.calendar-month');
  calendarYear.textContent = year;
  calendarMonth.textContent = monthNames[month];

  let calendarDayList = document.querySelector('.calendar').querySelectorAll('td');
  let locDate = new Date(year, month, 1);
  let day = locDate.getDate() - locDate.getDay() + 1;
  let i = 0;

  for (i; i < 35; i++) {
    locDate.setFullYear(year, month, day++);
    calendarDayList[i].textContent = locDate.getDate();

    if (locDate.getDay() === 0 || locDate.getDay() === 6) calendarDayList[i].style.color = 'red';
    else if (month != locDate.getMonth()) calendarDayList[i].style.color = 'blue';
    else calendarDayList[i].style.color = 'black';
  }

  locDate.setDate(day);
  if (month === locDate.getMonth()) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    document.querySelector('.calendar').querySelector('table').append(newRow);
    calendarDayList = document.querySelector('.calendar').querySelectorAll('td');

    for (i; i < 42; i++) {
      locDate.setFullYear(year, month, day++);
      calendarDayList[i].textContent = locDate.getDate();

      if (locDate.getDay() === 0 || locDate.getDay() === 6) calendarDayList[i].style.color = 'red';
      else if (month != locDate.getMonth()) calendarDayList[i].style.color = 'blue';
      else calendarDayList[i].style.color = 'black';
    }
  } else {
    if (document.querySelector('.calendar').querySelector('table').rows.length === 7) {
      document.querySelector('.calendar').querySelector('table').deleteRow(6);
    }
  }
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

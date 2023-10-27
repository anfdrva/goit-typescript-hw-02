/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY",
}

const isWeekend = (day: Days): boolean => {
  return day === Days.saturday || day === Days.sunday;
};
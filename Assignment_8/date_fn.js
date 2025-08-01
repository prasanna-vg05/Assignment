function getDayFromDate(dateString) {
    
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date format. Please use YYYY-MM-DD format.";
  }
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(`The day is: ${days[date.getDay()]}`);
}

getDayFromDate("2025-08-01");
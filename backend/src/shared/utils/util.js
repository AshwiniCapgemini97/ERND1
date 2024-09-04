export const isRequiredCheck = (name, value) => {
  let resp = "";
  if (value === "") {
    resp = `${name} is required`;
    return resp;
  }
  return resp;
};

export const getDateTime = (dateString) => {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Months are zero-indexed
  const day = dateObject.getDate();

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0"); // Pad minutes with leading zero

  const amPm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; // Convert to 12-hour format (12 for midnight/noon)

  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const formattedTime = `${hours12}:${minutes} ${amPm}`;

  return { date: formattedDate, time: formattedTime };
};

export const parseDate = (date: number): string => {
  const newDate = new Date(date);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return `${days[newDate.getDay()]} ${newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};

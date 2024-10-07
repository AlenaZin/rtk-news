// type OptionType = {
//   weekday: string;
//   year: string;
//   month: string;
//   day: string;
// };

export const formatDate = (date: Date) => {
  const option: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-US", option);
};

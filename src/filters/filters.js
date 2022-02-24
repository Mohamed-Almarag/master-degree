export const justSpecificWords = (v) => {
  if (typeof v === "string" && v.length >= 20) {
    return v.substring(0, 70) + " ... ";
  } else {
    return v;
  }
};

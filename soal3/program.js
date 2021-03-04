const divideAndSort = (number) => {
  if (typeof number !== "number") return "input harus berupa number";
  number = number.toString();
  const arrayOfNumber = number.split("0");
  const result = arrayOfNumber.map((num) =>
    num
      .split("")
      .map((data) => parseInt(data))
      .sort((a, b) => a - b)
      .join("")
  );
  return parseInt(result.join(""));
};

console.log(divideAndSort(5956560159466056));

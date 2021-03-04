const divideAndSort = (number) => {
  if (typeof number !== "number") return "input harus berupa number";
  const arrayOfNumber = number.toString().split("0");
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

// note:
// line3, menampung hasil perubahan, tidak merubah parameter
// nama variable di algoritma
// penyesuain teks di dalam box flowchart
//

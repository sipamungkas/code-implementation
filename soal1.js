const palindom = (word) => {
  if (typeof word !== "string" || word.length < 3)
    return "Input harus berupa string dengan panjang minimal 3 huruf";
  let reverseWord = "";
  const x = word.length - 1;
  for (let i = x; i >= 0; i--) {
    reverseWord = reverseWord + word[i];
  }
  if (word === reverseWord) {
    return "palindom";
  } else {
    return "bukan palindom";
  }
};
console.log(palindom("malam"));

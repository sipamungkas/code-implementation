const reverseSentence = (sentence) => {
  if (typeof sentence !== "string")
    return "kalimat masukan harus berupa string";

  let newSentence = "";
  let arrayOfWords = [];
  let wordIndex = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      arrayOfWords[wordIndex] =
        arrayOfWords[wordIndex] !== undefined
          ? arrayOfWords[wordIndex] + sentence[i]
          : "" + sentence[i];
    } else {
      wordIndex += 1;
    }
  }
  for (let j = arrayOfWords.length - 1; j >= 0; j--) {
    newSentence =
      newSentence === ""
        ? newSentence + arrayOfWords[j]
        : newSentence + " " + arrayOfWords[j];
  }
  return newSentence;
};

console.log(reverseSentence("Saya Belajar Javascript"));

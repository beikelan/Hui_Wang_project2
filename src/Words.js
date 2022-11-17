import words from "./words.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWords = async () => {
  let set;
  let wordForToday;
  await fetch(words)
    .then((response) => response.text())
    .then((result) => {
      const array = result.split("\n");
      wordForToday = array[Math.floor(Math.random() * array.length)];
      set = new Set(array);
    });
  return { set, wordForToday };
};

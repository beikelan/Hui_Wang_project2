import words from "./words.txt";
import words2 from "./words.txt";

export const boardDefault = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const boardDefault2 = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
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

export const generateWords2 = async () => {
  let set;
  let wordForToday;
  await fetch(words2)
    .then((response) => response.text())
    .then((result) => {
      const array = result.split("\n");
      wordForToday = array[Math.floor(Math.random() * array.length)];
      set = new Set(array);
    });
  return { set, wordForToday };
};

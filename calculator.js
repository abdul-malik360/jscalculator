let entryDisplay = document.getElementsByClassName("entry-display");

const choose = (characer) => {
  entryDisplay[0].value += characer;
};

const result = () => {
  let text = entryDisplay[0].value;
  let answer = eval(text);
  entryDisplay[0].value = answer;
};

const clearEntry = () => {
  entryDisplay[0].value = "";
};

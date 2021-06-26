function choose(characer) {
  document.getElementsByClassName("entry-display")[0].value += characer;
}

function result() {
  let text = document.getElementsByClassName("entry-display")[0].value;
  let answer = eval(text);
  document.getElementsByClassName("entry-display")[0].value = answer;
}

function clearEntry() {
  document.getElementsByClassName("entry-display")[0].value = "";
}
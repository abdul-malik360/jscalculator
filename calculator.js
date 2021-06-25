function choose(characer) {
  document.getElementsByClassName("entry-display")[0].value += characer;
}

function result() {
  let text = document.getElementsByClassName("entry_display").value;
  let answer = eval(text);
  document.getElementsByClassName("entry_display").value = answer;
}

function clear() {
  document.getElementsByClassName("entry_display").value = " ";
}

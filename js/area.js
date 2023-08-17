function calculateTringleArea() {
  const base = getInputValue("traingle-base");
  const hight = getInputValue("tringle-height");

  const area = 0.5 * base * hight;

  setElementInnerText("tringle-aria", area);
  //get base value
}
//Rectangle
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");

  //get rectangle langth

  const leangth = getInputValue("rectangle-lenght");
  const area = width * leangth;
  //show area UI
  setElementInnerText("rectangle-aria", area);
}

//parallelogram funtion
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const hight = getInputValue("parallelogram-height");
  const area = base * hight;
  setElementInnerText("parallelogram-aria", area);
}

//reduse funtine input in number
function getInputValue(fildId) {
  const inpuFild = document.getElementById(fildId);
  const inputValueText = inpuFild.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reduse set text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

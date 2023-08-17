function calculateTringleArea() {
  const base = getInputValue("traingle-base");
  const hight = getInputValue("tringle-height");

  const area = 0.5 * base * hight;

  setElementInnerText("tringle-aria", area);
  addToCalculationEntry("traingle", area);

  //get base value
}
//Rectangle
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const leangth = getInputValue("rectangle-lenght");
  if (isNaN(width) || isNaN(leangth)) {
    alert("please enter a number");
    return;
  } else {
    const area = width * leangth;
    setElementInnerText("rectangle-aria", area);
    addToCalculationEntry("rectangle", area);
  }
}

//parallelogram funtion
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const hight = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(hight)) {
    alert("please enter a number");
    return;
  }
  const area = base * hight;
  setElementInnerText("parallelogram-aria", area);
  // ad to calculation Entry
  addToCalculationEntry("Perallogram", area);
}
//eleps funtion
function calculatElepsArea() {
  const majorRadius = getInputValue("ellipse-first-radius");
  const minorRadius = getInputValue("ellipse-secend-radius");

  const area = 3.14 * majorRadius * minorRadius;
  const areaTowDecemal = area.toFixed(2);

  setElementInnerText("eleps-area", areaTowDecemal);
  addToCalculationEntry("ellipse", area);
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

//data validation
/*
  1. set input type number
  2. chack type using typeOf
  3. Nan ki na tar jonno isNaN dea 

*/

// add to calculation entry
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");
  p.classList.add("my-4");
  const cound = calculationEntry.childElementCount;
  p.innerHTML = ` ${cound + 1} . ${areaType} ${area} cm<sup>2</sup> 
  <button class='btn btn-success btn-sm'> Converd</button>
  `;
  calculationEntry.appendChild(p);
}

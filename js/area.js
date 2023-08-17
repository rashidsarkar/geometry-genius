function calculateTringleArea() {
  //get base value
  const baseFild = document.getElementById("traingle-base");
  const baseValueText = baseFild.value;
  const base = parseFloat(baseValueText);
  //get hight value
  const hightFild = document.getElementById("tringle-height");
  const hightValueText = hightFild.value;
  const hight = parseFloat(hightValueText);
  const area = 0.5 * base * hight;
  console.log(area);
  //show output
  const areaSpan = document.getElementById("tringle-aria");
  areaSpan.innerText = area;
}
//Rectangle
function calculateRectangleArea() {
  const widthFild = document.getElementById("rectangle-width");
  const widthValuetext = widthFild.value;
  const width = parseFloat(widthValuetext);
  console.log(width);
  //get rectangle langth
  const leangthFild = document.getElementById("rectangle-lenght");
  const leanghtValueText = leangthFild.value;
  const leangth = parseFloat(leanghtValueText);
  const area = width * leangth;
  //show area UI
  const rectangleAreasSpan = document.getElementById("rectangle-aria");
  rectangleAreasSpan.innerText = area;
}

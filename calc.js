document
  .querySelector("#data_form")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function calc() {
  const maxTmiha = document.getElementById("max_tmiha").value;

  const selfIncome = document.getElementById("self_income").value;

  let peilutCost;
  peilutCost = document.getElementById("alut_nitmehet").value;

  let approvedSum;
  approvedSum = document.getElementById("approved_sum").value;

  const officeSupport = approvedSum / peilutCost || 0;
  document.getElementById("office_support").innerText =
    Math.round(officeSupport * 100) + "%";
  const totalSelfIncome = 0;

  let alutPeilut;
  alutPeilut = document.getElementById("alut_peilut").value;

  let approved;
  approved = document.getElementById("approved").value;

  let drishatMekorot;

  if (maxTmiha == "" || selfIncome == "") {
    drishatMekorot = "חסרים נתונים";
  } else {
    if (peilutCost * (1 - maxTmiha / 100) <= selfIncome) {
      drishatMekorot = "עומד בתנאי";
    } else {
      drishatMekorot = "לא עומד בתנאי";
    }
  }
  document.getElementById("drishat_mekorot").innerText = drishatMekorot;
  const selfIncomeSeventyFive = selfIncome * 0.75;
  const maxPeilutCostToApprove = selfIncomeSeventyFive * 10;
  const maxTmihaCash = maxPeilutCostToApprove * 0.9;

  let tmihaMugbelet;
  if (approved == "") {
    tmihaMugbelet = "חסרים נתונים";
  } else {
    if (maxTmihaCash >= approved) {
      tmihaMugbelet = 'אינו מוגבל ע"י שיעור התמיכה המירבי';
    } else {
      tmihaMugbelet = 'מוגבל ע"י שיעור התמיכה המירבי';
    }
  }
  document.getElementById("tmiha_mugbelet").innerText = tmihaMugbelet;
  const costTenPercent = Math.round(alutPeilut * 0.1).toLocaleString();

  document.getElementById("ten_percent").innerText = costTenPercent;
  let finalSum;
  if (drishatMekorot == "לא עומד בתנאי") {
    finalSum = "לא עומד בתנאי";
  } else {
    if (approved > maxTmihaCash) {
      finalSum = Math.round(maxTmihaCash).toLocaleString();
    } else {
      finalSum = Math.round(approved).toLocaleString();
    }
  }
  document.getElementById("self_income_last_years").innerText = Math.round(
    selfIncome
  ).toLocaleString();
  document.getElementById(
    "seventy_five_percent_income_last_year"
  ).innerText = Math.round(selfIncomeSeventyFive).toLocaleString();
  document.getElementById("max_tmiha_ten_times").innerText = Math.round(
    maxPeilutCostToApprove
  ).toLocaleString();
  document.getElementById("max_tmiha_ninty_percent").innerText = Math.round(
    maxTmihaCash
  ).toLocaleString();

  document.getElementById("total").innerText = finalSum;

  const results = document.getElementsByClassName("results")[0];
  results.style.opacity = 1;
  results.style.display = "block";

  console.log("maxTmiha " + maxTmiha);
  console.log("selfIncome " + selfIncome);
  console.log("peilutCost " + peilutCost);
  console.log("approvedSum " + approvedSum);
  console.log("officeSupport " + officeSupport);
  console.log("alutPeilut " + alutPeilut);
  console.log("approved " + approved);
  console.log("selfIncomeSeventyFive " + selfIncomeSeventyFive);
  console.log("maxPeilutCostToApprove " + maxPeilutCostToApprove);
  console.log("maxTmihaCash " + maxTmihaCash);

  let nis = document.getElementsByClassName("nis");
  for (let element of nis) {
    console.log(element.innerText);
    if (!isNaN(element.innerText)) {
      element.innerText += " ₪";
    }
  }
}
function resetForm() {
  document.getElementById("data_form").reset();
  const results = document.getElementsByClassName("results")[0];
  results.style.opacity = 0;
  results.style.display = "none";
}
//
// function disclaimer(){
//   const disclaimer = document.getElementById("disclaimer")
//   const content = document.getElementById("content")
//   disclaimer.style.display= none
//   content.style.display=block
//
// }

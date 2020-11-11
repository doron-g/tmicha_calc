document.querySelector('#data_form').addEventListener('click', function (event) {
    event.preventDefault();
});


function calc() {
    const maxTmiha = document.getElementById("max_tmiha").value;

    const selfIncome = document.getElementById("self_income").value;

    let peilutCost
    if (document.getElementById("alut_nitmehet").value !== "") {
        peilutCost = document.getElementById("alut_nitmehet").value;
    } else {
        peilutCost = selfIncome / (100 - maxTmiha);
    }

    let approvedSum
    if (document.getElementById("approved_sum").value !== "") {
        approvedSum = document.getElementById("approved_sum").value
    } else {
        approvedSum = peilutCost * maxTmiha
    }

    const officeSupport = approvedSum / peilutCost
    document.getElementById("office_support").innerText = "שיעור תמיכת המשרד מתוך עלות הפעילות בשנה הקודמת היה: " + Math.round(officeSupport).toLocaleString() + "%"
    const totalSelfIncome = 0

    let alutPeilut
    if (document.getElementById("alut_peilut").value !== "") {
        alutPeilut = document.getElementById("alut_peilut").value
    } else {
        alutPeilut = peilutCost
    }
    let approved
    if (document.getElementById("approved").value !== "") {
        approved = document.getElementById("approved").value
    } else {
        approved = approvedSum
    }
    let drishatMekorot

    if (maxTmiha == "" || selfIncome == "") {
        drishatMekorot = "חסרים נתונים"

    } else {
        if (peilutCost * (100 - maxTmiha) <= selfIncome) {
            drishatMekorot = "עומד בתנאי"
        } else {
            drishatMekorot = "לא עומד בתנאי"

        }

    }
    document.getElementById("drishat_mekorot").innerText = '2. המוסד עמד בדרישת המקורות העצמיים בשנה קודמת' + ":" + drishatMekorot
    const selfIncomeSeventyFive = selfIncome * 0.75
    const maxPeilutCostToApprove = selfIncomeSeventyFive * 10
    const maxTmihaCash = maxPeilutCostToApprove * 0.9

    let tmihaMugbelet
    if (approved == "") {
        tmihaMugbelet = "חסרים נתונים"
    } else {
        if (maxTmihaCash >= approved) {
            tmihaMugbelet = 'אינו מוגבל ע"י שיעור התמיכה המירבי'
        } else {
            tmihaMugbelet = 'מוגבל ע"י שיעור התמיכה המירבי'
        }
    }
    document.getElementById("tmiha_mugbelet").innerText = '3. סכום התמיכה אינו מוגבל ע"י שיעור התמיכה המירבי כפי שייבדק להלן' + ':' + tmihaMugbelet
    const costTenPercent = Math.round(alutPeilut * 0.1).toLocaleString()


    document.getElementById("ten_percent").innerText = " 1. המוסד יממן לפחות 10% מעלות הפעילות הנתמכת בסך:" + costTenPercent
    let finalSum
    if (drishatMekorot == "לא עומד בתנאי") {
        finalSum = "לא עומד בתנאי"
    } else {
        if (approved > maxTmihaCash) {
            finalSum = Math.round(maxTmihaCash).toLocaleString() + 'ש"ח'
        } else {
            finalSum = Math.round(approved).toLocaleString() + 'ש"ח'
        }
    }
    document.getElementById("self_income_last_years").innerText = " סכום המקורות העצמיים שהציג בשנה קודמת בה נתמך  2018-9 " + Math.round(selfIncome).toLocaleString()
    document.getElementById("seventy_five_percent_income_last_year").innerText = " שיעור של 75% מסכום המקורות העצמיים בשנה קודמת " + Math.round(selfIncomeSeventyFive).toLocaleString()
    document.getElementById("max_tmiha_ten_times").innerText = " עלות הפעילות הנתמכת המקסימלית שתוכר ע\"י המשרד תהיה פי 10  " + Math.round(maxPeilutCostToApprove).toLocaleString()
    document.getElementById("max_tmiha_ninty_percent").innerText = " שיעור התמיכה המירבי שיוכר ע\"י המשרד יהיה 90% מעלות הפעילות המוכרת " + Math.round(maxTmihaCash).toLocaleString()

    document.getElementById("total").innerText = "סכום התמיכה המירבי יהיה: " + finalSum


    const results = document.getElementsByClassName("results")[0]
    results.style.opacity = 1
    results.style.display = "block"

    console.log("maxTmiha " + maxTmiha)
    console.log("selfIncome " + selfIncome)
    console.log("peilutCost " + peilutCost)
    console.log("approvedSum " + approvedSum)
    console.log("officeSupport " + officeSupport)
    console.log("alutPeilut " + alutPeilut)
    console.log("approved " + approved)
    console.log("selfIncomeSeventyFive " + selfIncomeSeventyFive)
    console.log("maxPeilutCostToApprove " + maxPeilutCostToApprove)
    console.log("maxTmihaCash " + maxTmihaCash)


}


function resetForm() {
    document.getElementById("data_form").reset();
    const results = document.getElementsByClassName("results")[0]
    results.style.opacity = 0
    results.style.display = "none"

}
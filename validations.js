function validateImage(imgAnswer) {

    // alert(imgAnswer.brown);
    return imgAnswer.yellow && !imgAnswer.brown && imgAnswer.red && imgAnswer.pink && imgAnswer.green && !imgAnswer.white;
    // return imgAnswer === "8";
}

function validateColor(colorMix) {
    return colorMix === "magenta";
}

function formatDate(date) {
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2)
    month = '0' + month;
    if (day.length < 2)
    day = '0' + day;

    return [year, month, day].join('-');
}

function validateDate(beforeYesterday) {
    let date = new Date();
    date.setDate(date.getDate() - 2);
    let beforeYesterdayDate = formatDate(date);
    // alert(beforeYesterdayDate);
    return beforeYesterdayDate === beforeYesterday;
}

function validateVideo(videoAnswer) {
    return parseInt(videoAnswer) === 4;
}

function validateRange(rangeAnswer) {
    return parseInt(rangeAnswer) > 120;
}

function validateTime(timeAnswer) {
    // alert(timeAnswer);
    if (timeAnswer === undefined || timeAnswer === null){
        return false;
    } else {
        let time = timeAnswer.split(":");
        return parseInt(time[0]) === 7 && parseInt(time[1]) > 9 && parseInt(time[1]) < 26;
    }
}

function validateBrightestColor(colorPickAnswer) {
    return colorPickAnswer === "#000000";
}

function validatePlaceholder(placeholderAnswer) {
    return placeholderAnswer === "responsive";
}

function validateNavbar(navbarAnswer) {
    return navbarAnswer === "logout";
}

function validateYtb(ytbAnswer) {
    return ytbAnswer.toLowerCase() === "vladimir" || ytbAnswer.toLowerCase() === "vladimír";
}

function validatePageNumber(pageAnswer) {
    return parseInt(pageAnswer) === 9;
}

function validateOl(orlAnswer) {
    return orlAnswer === "5";
}

function validateCode(codeAnswer) {
    return codeAnswer.toLowerCase() === "tincidunt";
}

function validateTable(tableAnswer) {
    return tableAnswer === "144";
}

function validateIceCream(flavorSelect) {
    return flavorSelect === "cocoa";
}

function validateMap(mapAnswer) {
    return mapAnswer === "Terchová";
}

function validateFormComponents(opt){
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let wrongAnswers = [];

    if (validateImage(opt.component.getValues().imgAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("1");
}

    if (validateColor(opt.component.getValues().colorMix)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("2");
}

    if (validateDate(opt.component.getValues().beforeYesterday)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("3");
}

    if (validateVideo(opt.component.getValues().videoAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("4");
}

    if (validateRange(opt.component.getValues().rangeAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("5");
}

    if (validateTime(opt.component.getValues().timeAnswer)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("6")
}

    if (validateBrightestColor(opt.component.getValues().colorPickAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("7")
}

    if (validatePlaceholder(opt.component.getValues().placeholderAnswer)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("8");
}

    if (validateNavbar(opt.component.getValues().navbarAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("9");
}

    if (validateYtb(opt.component.getValues().ytbAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("10");
}

    if (validatePageNumber(opt.component.getValues().pageAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("11");
}

    if (validateOl(opt.component.getValues().orlAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("12");
}

    if (validateCode(opt.component.getValues().codeAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("13");
}

    if (validateTable(opt.component.getValues().tableAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("14");
}

    if (validateIceCream(opt.component.getValues().flavorSelect)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("15");
}

    if (validateMap(opt.component.getValues().mapAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("16");
}
    // validateMap() ? correctAnswers++ : incorrectAnswers++;
    return { correctAnswers: correctAnswers, incorrectAnswers: incorrectAnswers, wrongAnswers: wrongAnswers};
}

function validateForm(opt, timer) {
    // let correctAnswers = 0;
    // let incorrectAnswers = 0;
    // let wrongAnswers = [];
    let d = new Date();
    let duration = (d.getTime() - timer.getTime()) / 1000;
    const {correctAnswers, incorrectAnswers, wrongAnswers} = validateFormComponents(opt);
    alert("Form done in " + duration + "s");
    alert("Correct answers: " + correctAnswers);
    alert("Wrong answers: " + incorrectAnswers);
    alert("Wrong answers: " + wrongAnswers);
    alert(JSON.stringify(opt.component.getValues(), null, 1))
    // window.location.reload();
}

if (!location.href.match(/^(about:|file:)/)) {
    var bplCookie = document.cookie.match(/(^|;\s*)uu\.app\.bpl=([^;]+)/);
    var bplSegmentCount = (bplCookie ? Number(bplCookie[2]) : null);
    if (typeof bplSegmentCount !== "number" || isNaN(bplSegmentCount) || bplSegmentCount < 0) bplSegmentCount = 2;
    var appBaseUrlPath = (location.pathname.split(/\//).slice(0,1+bplSegmentCount).join("/")+"/").replace(/\/+/g,"/").replace(/"/g,"");
    var appAssetsRelativeUrlPath = "public/0.0.0/";
    document.write('<base href="' + appBaseUrlPath + appAssetsRelativeUrlPath + '" data-uu-app-base="' + appBaseUrlPath + '" data-uu-app-assets-base="' + appAssetsRelativeUrlPath + '">');
}
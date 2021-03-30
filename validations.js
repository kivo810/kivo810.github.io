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
    return parseInt(videoAnswer) === 4 || parseInt(videoAnswer) === 3;
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
    return ytbAnswer.trim().toLowerCase() === "vladimir" || ytbAnswer.trim().toLowerCase() === "vladimír";
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
    let bad = [];

    if (validateImage(opt.component.getValues().imgAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("1");
    bad.push("Image answer");
}

    if (validateColor(opt.component.getValues().colorMix)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("2");
    bad.push("Color mix answer");
}

    if (validateDate(opt.component.getValues().beforeYesterday)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("3");
    bad.push("Date answer");
}

    if (validateVideo(opt.component.getValues().videoAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("4");
    bad.push("Video answer");
}

    if (validateRange(opt.component.getValues().rangeAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("5");
    bad.push("Range answer");
}

    if (validateTime(opt.component.getValues().timeAnswer)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("6");
    bad.push("Time answer");
}

    if (validateBrightestColor(opt.component.getValues().colorPickAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("7");
    bad.push("Color pick answer");
}

    if (validatePlaceholder(opt.component.getValues().placeholderAnswer)) {
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("8");
    bad.push("Placeholder answer");
}

    if (validateNavbar(opt.component.getValues().navbarAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("9");
    bad.push("Navigation menu answer");
}

    if (validateYtb(opt.component.getValues().ytbAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("10");
    bad.push("Youtube prisoners answer");
}

    if (validatePageNumber(opt.component.getValues().pageAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("11");
    bad.push("Page number answer");
}

    if (validateOl(opt.component.getValues().orlAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("12");
    bad.push("Ordered list answer");
}

    if (validateCode(opt.component.getValues().codeAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("13");
    bad.push("Code answer");
}

    if (validateTable(opt.component.getValues().tableAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("14");
    bad.push("Table answer");
}

    if (validateIceCream(opt.component.getValues().flavorSelect)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("15");
    bad.push("Flavor answer");
}

    if (validateMap(opt.component.getValues().mapAnswer)){
    correctAnswers++;
} else {
    incorrectAnswers++;
    wrongAnswers.push("16");
    bad.push("Map answer");
}
    // validateMap() ? correctAnswers++ : incorrectAnswers++;
    return { correctAnswers: correctAnswers, incorrectAnswers: incorrectAnswers, wrongAnswers: wrongAnswers, badAnswers: bad};
}

function showResult(duration, correctAnswers, incorrectAnswers, wrongAnswers, badAnswers) {
    document.write("<h1>Thank you!</h1>");
    document.write("<h3>Here is your data: </h3>");
    document.write("<h3>Form done in: </h3>" + duration);
    document.write("<h3>Correct answers: </h3>" + correctAnswers);
    document.write("<h3>Incorrect answers: </h3>" + incorrectAnswers);
    document.write("<h3>Wrong answers: </h3>" + wrongAnswers);
    document.write("<h3>Bad answers: </h3>");
    for (let str of badAnswers){
        document.write("<h6></h6>" + str);
    }
}

function validateForm(opt, timer) {
    // let correctAnswers = 0;
    // let incorrectAnswers = 0;
    // let wrongAnswers = [];
    let d = new Date();
    let duration = (d.getTime() - timer.getTime()) / 1000;
    const {correctAnswers, incorrectAnswers, wrongAnswers, badAnswers} = validateFormComponents(opt);
    alert("Form done in " + duration + "s");
    alert("Correct answers: " + correctAnswers);
    alert("Wrong answers: " + incorrectAnswers);
    alert("Wrong answers: " + wrongAnswers);
    alert(JSON.stringify(opt.component.getValues(), null, 1));
    console.log(JSON.stringify(opt.component.getValues(), null, 1));
    showResult(duration, correctAnswers, incorrectAnswers, wrongAnswers, badAnswers);
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
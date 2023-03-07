function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// function introduction(name = "Aki") {
//     console.log(`Hi, my name is ${name}.`);
//     //return name(`Hi, my name is ${name}.`);
// }


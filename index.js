const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

let destination = document.getElementById("kata");

function createTextContainer(string) {
    const newElement = document.createElement("div");
    const textNode = document.createTextNode(string)
    newElement.style.margin = "10px"
    newElement.appendChild(textNode);
    destination.appendChild(newElement);
}

function createAnswerTextContainer(string) {
    const newElement = document.createElement("div");
    const textNode = document.createTextNode(string)
    newElement.style.margin = "10px"
    newElement.style.width = "800px"
    newElement.style.backgroundColor = "lightblue"
    newElement.appendChild(textNode);
    destination.appendChild(newElement);
}

function createNodeContainer(node) {
    const newElement = document.createElement("div");
    newElement.appendChild(node);
    destination.appendChild(newElement);
}

function kata1() {
    const gotCitiesArray = gotCitiesCSV.split(",")
    return JSON.stringify(gotCitiesArray)
}

createTextContainer("1. Display an array from the cities in gotCitiesCSV")
createAnswerTextContainer(kata1())

function kata2() {
    const bestThingArray = bestThing.split(" ")
    return JSON.stringify(bestThingArray)
}

createTextContainer("2. Display an array of words from the sentence in bestThing")
createAnswerTextContainer(kata2())

function kata3() {
    let gotCitiesSemicolon = gotCitiesCSV.replace(/,/gi, ";")
    return JSON.stringify(gotCitiesSemicolon)
}

createTextContainer("3. Display a string separated by semi-colons instead of commas from gotCitiesCSV")
createAnswerTextContainer(kata3())

function kata4() {
    let lotrCitiesCSV = lotrCitiesArray.join()
    return lotrCitiesCSV
}

createTextContainer("4. Display a CSV (comma-separated) string from the lotrCitiesArray")
createAnswerTextContainer(kata4())

function kata5() {
    let lotrCitiesFirstFive = lotrCitiesArray.slice(0, 5)
    return JSON.stringify(lotrCitiesFirstFive)
}

createTextContainer("5. Display the first 5 cities in lotrCitiesArray")
createAnswerTextContainer(kata5())

function kata6() {
    let lotrCitiesLastFive = lotrCitiesArray.slice(3)
    return JSON.stringify(lotrCitiesLastFive)
}

createTextContainer("6. Display the last 5 cities in lotrCitiesArray")
createAnswerTextContainer(kata6())

function kata7() {
    let lotrCities3To5 = lotrCitiesArray.slice(2, 5)
    return JSON.stringify(lotrCities3To5)
}

createTextContainer("7. Display the 3rd to 5th city in lotrCitiesArray")
createAnswerTextContainer(kata7())

function kata8() {
    lotrCitiesArray.splice(2, 1)
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("8. Using splice, remove 'Rohan' from lotrCitiesArray")
createAnswerTextContainer(kata8())

function kata9() {
    lotrCitiesArray.splice(5)
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("9. Using splice, remove all cities after 'Dead Marshes' in lotrCitiesArray")
createAnswerTextContainer(kata9())

function kata10() {
    lotrCitiesArray.splice(2, 0, "Rohan")
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("10. Using splice, add 'Rohan' back to lotrCitiesArray right after 'Gondor'")
createAnswerTextContainer(kata10())

function kata11() {
    lotrCitiesArray.splice(5, 1, "Deadest Marshes")
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("11. Using splice, rename 'Dead Marshes' to 'Deadest Marshes' in lotrCitiesArray")
createAnswerTextContainer(kata11())

function kata12() {
    let bestThingFirst14 = bestThing.slice(0, 14)
    return bestThingFirst14
}

createTextContainer("12. Using slice, display the first 14 characters from bestThing")
createAnswerTextContainer(kata12())

function kata13() {
    let bestThingLast12 = bestThing.slice(-12)
    return bestThingLast12
}

createTextContainer("13. Using slice, display the last 12 characters from bestThing")
createAnswerTextContainer(kata13())

function kata14() {
    let bestThing23To38 = bestThing.slice(23, 38)
    return bestThing23To38
}

createTextContainer("14. Using slice, display characters between the 23rd and 38th position of bestThing")
createAnswerTextContainer(kata14())

function kata15() {
    let bestThingLast12 = bestThing.substr(bestThing.length - 12)
    return bestThingLast12
}

createTextContainer("15. Repeat #13 using substring instead of slice.")
createAnswerTextContainer(kata15())

function kata16() {
    let bestThing23To38 = bestThing.substring(23, 38)
    return bestThing23To38
}

createTextContainer("16. Repeat #14 using substr instead of slice.")
createAnswerTextContainer(kata16())

function kata17() {
    return bestThing.indexOf("only")
}

createTextContainer("17. Find and display the index of 'only' in bestThing")
createAnswerTextContainer(kata17())

function kata18() {
    return bestThing.indexOf("bit")
}

createTextContainer("18. Find and display the index of the last word in bestThing")
createAnswerTextContainer(kata18())

function kata19() {
    const gotCitiesArray = gotCitiesCSV.split(",")
    let gotCitiesDoubleVowels = []
    for(let i = 0; i <= gotCitiesArray.length; i++) {
        let gotCitiesIteration = gotCitiesArray[i]
        if(String(gotCitiesIteration).includes("aa") === true) {
            gotCitiesDoubleVowels.push(gotCitiesIteration)
        } else if(String(gotCitiesIteration).includes("ee") === true) {
            gotCitiesDoubleVowels.push(gotCitiesIteration)
        } else if(String(gotCitiesIteration).includes("ii") === true) {
            gotCitiesDoubleVowels.push(gotCitiesIteration)
        } else if(String(gotCitiesIteration).includes("oo") === true) {
            gotCitiesDoubleVowels.push(gotCitiesIteration)
        } else if(String(gotCitiesIteration).includes("uu") === true) {
            gotCitiesDoubleVowels.push(gotCitiesIteration)
        }
    }
    return JSON.stringify(gotCitiesDoubleVowels)
}

createTextContainer("19. Find and display all cities from gotCitiesCSV that use double vowels ('aa','ee', etc.)")
createAnswerTextContainer(kata19())

function kata20() {
    let lotrCitiesEndsWith = []
    for(let i = 0; i <= lotrCitiesArray.length; i++) {
        if(String(lotrCitiesArray[i]).endsWith("or") === true) {
            lotrCitiesEndsWith.push(lotrCitiesArray[i])
        }
    }
    return JSON.stringify(lotrCitiesEndsWith)
}

createTextContainer("20. Find and display all cities from lotrCitiesArray that end with 'or'")
createAnswerTextContainer(kata20())

function kata21() {
    const bestThingArray = bestThing.split(" ")
    let bestThingB = []
    for(let i = 0; i <= bestThingArray.length; i++) {
        if(String(bestThingArray[i]).startsWith("b") === true) {
            bestThingB.push(bestThingArray[i])
        }
    }
    return JSON.stringify(bestThingB)
}

createTextContainer("21. Find and display all the words in bestThing that start with a 'b'")
createAnswerTextContainer(kata21())

function kata22() {
    if(lotrCitiesArray.includes("Mirkwood") === true) {
        var result = "Yes"
    } else {
        var result = "No"
    }
    return result
}

createTextContainer("22. Display 'Yes' or 'No' if lotrCitiesArray includes 'Mirkwood'")
createAnswerTextContainer(kata22())

function kata23() {
    if(lotrCitiesArray.includes("Hollywood") === true) {
        var result = "Yes"
    } else {
        var result = "No"
    }
    return result
}

createTextContainer("23. Display 'Yes' or 'No' if lotrCitiesArray includes 'Hollywood'")
createAnswerTextContainer(kata23())

function kata24() {
    const Mirkwood = lotrCitiesArray.indexOf("Mirkwood")
    return Mirkwood
}

createTextContainer("24. Display the index of 'Mirkwood' in lotrCitiesArray")
createAnswerTextContainer(kata24())

function kata25() {
    let lotrCitiesTwoWord = []
    for(let i = 0; i <= lotrCitiesArray.length; i++) {
        if(String(lotrCitiesArray[i]).includes(" ") === true) {
            lotrCitiesTwoWord.push(lotrCitiesArray[i])
        }
    }
    return lotrCitiesTwoWord
}

createTextContainer("25. Find and display the first city in lotrCitiesArray that has more than one word")
createAnswerTextContainer(kata25())

function kata26() {
    const lotrCitiesReversed = lotrCitiesArray.reverse()
    return JSON.stringify(lotrCitiesReversed)
}

createTextContainer("26. Reverse the order in lotrCitiesArray")
createAnswerTextContainer(kata26())

function kata27() {
    const lotrCitiesAlpha = lotrCitiesArray.sort()
    return JSON.stringify(lotrCitiesAlpha)
}

createTextContainer("27. Sort lotrCitiesArray alphabetically")
createAnswerTextContainer(kata27())

function kata28() {
    function compare(a, b) {
        aCity = a.slice(a.lastIndexOf(" "));
        bCity = b.slice(b.lastIndexOf(" "));
        if (aCity === bCity) {
          return 0;
        } else if (aCity < bCity) {
          return 1;
        } else {
          return -1;
        }
    }
    lotrCitiesArray.sort(compare)
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)")
createAnswerTextContainer(kata28())

function kata29() {
    lotrCitiesArray.pop()
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("29. Using pop, remove the last city from lotrCitiesArray")
createAnswerTextContainer(kata29())

function kata30() {
    lotrCitiesArray.push("Deadest Marshes")
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array")
createAnswerTextContainer(kata30())

function kata31() {
    lotrCitiesArray.shift()
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("31. Using shift, remove the first city from lotrCitiesArray")
createAnswerTextContainer(kata31())

function kata32() {
    lotrCitiesArray.unshift("Gondor")
    return JSON.stringify(lotrCitiesArray)
}

createTextContainer("32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array")
createAnswerTextContainer(kata32())
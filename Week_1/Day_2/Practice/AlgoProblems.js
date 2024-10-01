function stringRepeat(str, repeatAmount) {
    var newString = "";
    for (var i = 0; i < repeatAmount; i++) {
        newString += str;
    }
    console.log(newString)
    return newString;
}

stringRepeat("hello ",10)
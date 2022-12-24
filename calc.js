function tscore(arr) {
    if (arr.length==null) {
        console.error("data must be array");
        return false;
    }
    if (arr.length<1) {
        console.error("no data");
        return false;
    }
    let sum = arr.reduce((a,b)=>a+b); // summation
    let avr = sum/arr.length; // average
    let dev = []; // deviation
    let sdev = []; // squared deviation
    for (let elm of arr) {
        dev.push(elm-avr);
        sdev.push((elm-avr)**2);
    }
    let sdevsum = sdev.reduce((a,b)=>a+b);
    let vri = sdevsum/arr.length; // variance
    let stdev = Math.sqrt(vri); // standard deviation
    let tscore = [];
    for (let elm of dev) {
        tscore.push(elm*10/stdev+50)
    }
    return tscore;
}

exports.tscore = tscore;
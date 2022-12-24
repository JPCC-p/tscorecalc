function tscore(arr) {
    console.log("data:",arr);
    let sum = arr.reduce((a,b)=>a+b); // summation
    let avr = sum/arr.length; // average
    console.log("sum:",sum,"avr:",avr);
    let dev = []; // deviation
    let sdev = []; // squared deviation
    for (let elm of arr) {
        dev.push(elm-avr);
        sdev.push((elm-avr)**2);
    }
    console.log("dev:",dev);
    console.log("sdev:",sdev);
    let sdevsum = sdev.reduce((a,b)=>a+b);
    let vri = sdevsum/arr.length; // variance
    let stdev = Math.sqrt(vri); // standard deviation
    console.log("vri",vri,"stdev:",stdev);
}

exports.tscore = tscore;
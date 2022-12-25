var input = document.getElementById("inputtext");
let reserror = document.getElementById("resulterror");
input.onchange = update;
input.onkeyup = update;
window.onload = update;

function update() {
    let text = document.getElementById("inputtext").value;
    reserror.innerText = "";
    let data = getdata(text);
    if (data==false) {
        let table1 = document.getElementById("resulttable1");
        let table2 = document.getElementById("resulttable2");
        table1.innerHTML = "";table2.innerHTML = "";
        return false;
    }
    let result = tscore(data);
    showresult(result);
}
function getdata(text) {
    if (text.length==0) {
        console.error("No data");
        reserror.innerText = "No data";
        return false;
    }
    let tarr = text.split(",");
    let narr = [];
    for (let elm of tarr) {
        if (elm=="") {
            console.warn("null cell is there");
            reserror.innerText = "null cell is there";
            continue;
        }
        if (isNaN(Number(elm))) {
            console.error("NaN is there");
            reserror.innerText = "NaN is there";
            return false;
        }
        narr.push(Number(elm));
    }
    return narr;
}
function showresult(data) {
    let table1 = document.getElementById("resulttable1");
    let table2 = document.getElementById("resulttable2");
    table1.innerHTML = "";table2.innerHTML = "";
    // table1
    let table1conf = [["average",data.avr],["squared deviation",data.stdev],["variance",Math.sqrt(data.stdev)]];
    for (let elm of table1conf) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = elm[0];
        td2.innerText = elm[1];
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
    }
    // table2
    let table2thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let table2theadconf = ["data","deviation","squared deviation","t-score"];
    for (let elm of table2theadconf) {
        let th = document.createElement("th");
        th.innerText = elm;
        tr.appendChild(th);
    }
    table2thead.appendChild(tr);
    table2.appendChild(table2thead);
    for (let i=0;i<data.data.length;i++) {
        let tr = document.createElement("tr");
        let tdconf = [data.data[i],data.dev[i],data.sdev[i],data.tscore[i]];
        for (let elm of tdconf) {
            let td = document.createElement("td");
            td.innerText = elm;
            tr.appendChild(td);
        }
        table2.appendChild(tr);
    }
}
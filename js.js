var m1 = "";
var act = "";
var rst = "";
var elvp = false;
var ht = new Array();
var htItem = new Object();
var nåværendefelt = "";

function oppdaterstfelt(felt) {
    document.getElementById('rst').innerHTML = felt;
}
function updateTable() {
    var table = document.getElementById('sTable');
    table.innerHTML = "<tr>" +
        "<th>A</th>" +
        "<th>VEIKSMAS</th>" +
        "<th>B</th>" +
        "<th>REZULTATAS<input type='button' id='Opp' value='Opp' onclick='sorterstopp()'>" +
        "<input type='button' id='Ned' value='Ned' onclick='sorterstned()'></th>" +
        "</tr>";

    ht.forEach(item => {
        var row = "<tr>" + "<td>" + item.nr1 + "</td>" + "<td>" + item.ha + "</td>"
            + "<td>" + item.nr2 + "</td>" + "<td>" + item.rz + "</td>" + "</tr>";
        table.innerHTML += row;
    });
}
function handleClick(id) {
    if (elvp) {
        nåværendefelt = "";
        elvp = false;
        if (id != 'd/' && id != 'd*' && id != 'a-' && id != 's+') {
            if (id == 'dot' && nåværendefelt.indexOf(".") == -1) {
                nåværendefelt += ".";
            } else if (!isNaN(id.valueOf())) {
                nåværendefelt += id.valueOf();
                oppdaterstfelt(nåværendefelt);
            }
        } else {
            utførehandling(id);
        }
    } else {
        if (id != 'd/' && id != 'd*' && id != 'a-' && id != 's+') {
            if (id == 'dot' && nåværendefelt.indexOf(".") == -1) {
                nåværendefelt += ".";
            } else if (!isNaN(id.valueOf())) {
                nåværendefelt += id.valueOf();
                oppdaterstfelt(nåværendefelt);
            }
        } else {
            utførehandling(id);
        }
    }
}
function leggtilih(item) {
    ht.push(item);
    updateTable();
}
function sorterstopp() {
    ht = ht.sort(function (o1, o2) {
        return o1.rz - o2.rz;
    });
    updateTable();
}
function sorterstned() {
    ht = ht.sort(function (o1, o2) {
        return o2.rz - o1.rz;
    });
    updateTable();
}
function utførehandling(id) {
    switch (id) {
        case 'd/':act = "/"
            if (nåværendefelt != "") {
                m1 = nåværendefelt;
            }
            nåværendefelt = "";
            oppdaterstfelt(nåværendefelt);
            break;
        case 'd*':act = "*"
            if (nåværendefelt != "") {
                m1 = nåværendefelt;
            }
            nåværendefelt = "";
            oppdaterstfelt(nåværendefelt);
            break;
        case 'a-':act = "-"
            if (nåværendefelt != "") {
                m1 = nåværendefelt;
            }
            nåværendefelt = "";
            oppdaterstfelt(nåværendefelt);
            break;
        case 's+':act = "+"
            if (nåværendefelt != "") {
                m1 = nåværendefelt;
            }
            nåværendefelt = "";
            oppdaterstfelt(nåværendefelt);
            break;default:return;
    }
}
function regneut() {
    switch (act) {
        case '/':elvp = true;
            rst = Number(m1) / Number(nåværendefelt);
            oppdaterstfelt(rst);
            leggtilih(htItem = {nr1: m1,
                ha: act,
                nr2: nåværendefelt,
                rz: rst
            });
            console.log(htItem);
            act = "";
            m1 = "";
            nåværendefelt = rst;
            break;
        case '*':elvp = true;
            rst = Number(m1) * Number(nåværendefelt);
            oppdaterstfelt(rst);
            leggtilih(htItem = {nr1: m1,
                ha: act,
                nr2: nåværendefelt,
                rz: rst
            });
            act = "";
            m1 = "";
            nåværendefelt = rst;
            break;
        case '-':elvp = true;
            rst = Number(m1) - Number(nåværendefelt);
            oppdaterstfelt(rst);
            leggtilih(htItem = {nr1: m1,
                ha: act,
                nr2: nåværendefelt,
                rz: rst
            });
            act = "";
            m1 = "";
            nåværendefelt = rst;
            break;
        case '+':elvp = true;
            rst = Number(m1) + Number(nåværendefelt);
            oppdaterstfelt(rst);
            leggtilih(htItem = {nr1: m1,
                ha: act,
                nr2: nåværendefelt,
                rz: rst
            });
            act = "";
            m1 = "";
            nåværendefelt = rst;
            break;
        default:
            return;
    }
}

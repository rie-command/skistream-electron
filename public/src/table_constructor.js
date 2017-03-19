/**
 * Created by sinires on 02.03.17.
 */

function redrawTable(data) {
    var table = document.getElementById("table_data"),
        content = "",
        newData = [];

    if(!data && !data.length) return;

    data.forEach(row => {
        var newRow = Object.assign({},
            {['Bib']: row['Bib']},
            {['Team']: row['Team']},
            {['Name']: row['Name']},
            {['Time']: row['Time']},
            {['Timetobeat']: row['Timetobeat']},
            {['Rank']: row['Rank']});
        newData.push(newRow);
    });

    newData.forEach(field => {
        content += '<div class="table-row">';
            for (let key in field){
                content += `<div class='table-cell ${key}'>`;
                content += field[key];
                content += '</div>'
            }
        content += '</div>'
        }
    );

    table.innerHTML = content;
    updateStyle();
}

redrawTable(string2array(globalString))
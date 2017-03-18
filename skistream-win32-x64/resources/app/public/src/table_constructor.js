/**
 * Created by sinires on 02.03.17.
 */

function redrawTable(data) {
    var table = document.getElementById("table_data"),
        content = "";

    if(!data && !data.length) return;

    data.forEach(field => {
        console.info(field);
        content += '<div class="table-row">';
            for (let key in field){
                content += `<div class='table-cell ${key}'>`;
                content += field[key];
                content += '</div>'
            }
        content += '</div>'
        }
    );

    // data.forEach(
        // function(field) {
        //     if (!field && !field.length) return;
        //     content +='<tr>';
        //     field.forEach(
        //         function(cell) {
        //             content+= '<td class="text-style">';
        //             content+= cell;
        //             content+= '</td>';
        //         }
        //     );
        //     content +='</tr>'
        // }
    // );

    table.innerHTML = content;
    updateStyle();
}

redrawTable(string2array(globalString))
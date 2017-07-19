//You are given and HTML table holding countries and their capitals.
//You need to implement a [Create] link to create a new country and for each existing country implement [Up],
//[Down] and [Delete] links to manipulate its position in the table.

function initializeTable() {
    //add the function on clicking on create Link
    $('#createLink').click(function () {
        let countryName = $('#newCountryText').val();
        let capitalName = $('#newCapitalText').val();
        appendCountryToTable(countryName, capitalName);
    });

    //create data fir the table
    appendCountryToTable('Bulgaria', 'Sofia');
    appendCountryToTable('Germany', 'Berlin');
    appendCountryToTable('Russia', 'Moscow');

    //function for appending data to the table
    function appendCountryToTable(countryName, capitalName) {
        //first create the <tr> using jQuery
        let tr = $("<tr>");

        //append country name and capital name to the newly created <td>
        tr.append($("<td>").text(countryName));
        tr.append($("<td>").text(capitalName));

        //have actions variable with href to # (same page) and Delete value, on click call deleteItem function
        //we have separate variable for each href and actions, otherwise if we append them together the actions can not be
        //recognized correctly
        let deleteLink = $('<a href="#">[Delete]</a>').click(deleteItem);
        let upLink = $('<a href="#">[Up]</a>').click(moveUp);
        let downLink = $('<a href="#">[Down]</a>').click(moveDown);

        //we create <td> and append upLink, downLink with spaces in between and deleteLink to it.
        //tr appends the created <td>
        tr.append($("<td>")
                .append(upLink)
                .append(" ")
                .append(downLink)
                .append(" ")
                .append(deleteLink)
        );

        //append the <tr> to the countries table
        $('#countriesTable').append(tr);
        fixRowActions();
    }

    function deleteItem() {
        //from the current element we need to go to the parent and delete the whole <tr> with parent()
        //you can use remove() or fadeOut() - it removes it by fading, but remains in the DOM
        let row = $(this).parent().parent();

        //we need to put the function to delete the row in fadeOut(), so that it will occur after fadeOut is complete
        //because all functions are done asynchronously (functions don't wait for each other to complete)
        row.fadeOut(function () {
            row.remove();
            fixRowActions();
        });
    }


    //we need to have fixRowActions in the functions where we fade in , and move the rows
    function moveUp() {
        let row = $(this).parent().parent();

        //because we have asynchronous programming we have the move and fade in after the fadeOut is finished
        //the parent is jQuery, so we don't need to use $ sign
        row.fadeOut(function () {
            //after the previous insert the row
            row.prev().insertAfter(row);
            row.fadeIn();
            fixRowActions();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();

        //because we have asynchronous programming we have the move and fade in after the fadeOut is finished
        //the parent is jQuery, so we don't need to use $ sign
        row.fadeOut(function () {
            //insert before the current row
            row.next().insertBefore(row);
            row.fadeIn();
            fixRowActions();
        });
    }

    //after each change of the table we need to remove the Up of the first row
    //we need to remove the Down link from the last row
    function fixRowActions() {
        //we get all rows to an array
        let rows = $('#countriesTable tr').toArray();

        //here we get the first row (because we have a header and a create row) to be yellow to test whether we have the right item
        //we have also the last row in yellow, but in this case, all rows get yellow, because at one point all rows are last
        //while beeing added
        //$(rows).css('color', 'black');
        //$(rows[2]).css('color', 'yellow');
        //$(rows[rows.length - 1]).css('color', 'yellow');

        //show all elements for td > a
        $(rows).find('td a').show();

        //hide td > a that contains Up from the first row (which is actually third)
        $(rows[2]).find("td a:contains('Up')").hide();

        //hide td > a that contains Down from the last row
        $(rows[rows.length - 1]).find("td a:contains('Down')").hide();
    }
}

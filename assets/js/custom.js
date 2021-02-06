$('document').ready(function () {

    $('.clear-dropdown-search').click(clearDropdownSearchText);

    $('.dropdown-item,.clear-dropdown-search').click(resetDefaultEvent);

    $('.dropdown-filter-container input').keyup(filterMenu);

    $('.dropdown-search .dropdown-toggle').each(function () {
        var data = $(this).attr('data-predefined-list').split(',');
        $(this).siblings().find('ul li').each(function () {
            for (var index = 0; index < data.length; index++) {
                if ($(this).find('span').text().toLowerCase() == data[index].toLowerCase()) {
                    $(this).find('input[type="checkbox"]').attr('checked', 'checked');
                }
            }
        })
    })
})


function clearDropdownSearchText() {
    $(this).siblings().val('');
    $(this).parents('.dropdown-menu').find('li').show();
}

function filterMenu() {
    var searchedValue = $(this).val().toLowerCase();
    var menuID = $(this).attr('data-linkedto-list');
    $(menuID + ' li').each(function () {
        if ($(this).find('span').text().toLowerCase().indexOf(searchedValue) > -1) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
}


function resetDefaultEvent() {
    var dropdownButton = $(this).parents('ul').attr('id');
    if ($(this).find('input[type="checkbox"]').attr('checked') == undefined || $(this).find('input[type="checkbox"]').attr('checked') == false) {
        $(this).find('input[type="checkbox"]').attr('checked', 'checked');
        var existingList = $(this).parents('.dropdown-search').find('.dropdown-toggle').attr('data-predefined-list').toLowerCase();
        var clickedArray = existingList.split(',');
        clickedArray.push($(this).find('input').attr('value').toLowerCase());//splice replace the existing array
        var newList = clickedArray.join(',')
        $(this).parents('.dropdown-search').find('.dropdown-toggle').attr('data-predefined-list', newList);
    }
    else {
        $(this).find('input[type="checkbox"]').removeAttr('checked');
        var existingList = $(this).parents('.dropdown-search').find('.dropdown-toggle').attr('data-predefined-list').toLowerCase();
        if (existingList.indexOf($(this).find('input').attr('value').toLowerCase()) > -1) {
            var clickedArray = existingList.split(',');
            var popIndex = null;
            for (var index = 0; index < clickedArray.length; index++) {
                if (clickedArray[index] == $(this).find('input').attr('value').toLowerCase()) {
                    popIndex = index;
                    index = clickedArray.length;//to close for loop
                }
            }
            clickedArray.splice(popIndex, 1);//splice replace the existing array
            var newList = clickedArray.join(',')
            $(this).parents('.dropdown-search').find('.dropdown-toggle').attr('data-predefined-list', newList);
        }
    }
    return false;// boostrap dropdown close dropmenu while clicking/choosing value from dropdown menu to restrict that we are using return false;
}

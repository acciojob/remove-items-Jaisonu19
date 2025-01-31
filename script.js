//your JS code here. If required.
// Get references to the dropdown and button
var Colorselect = document.querySelector('#colorSelect');
var removeButton = document.querySelector('#RemoveButton');

// Add an event listener to the button
removeButton.addEventListener('click', function () {
    // Get the selected index
    var selectIndex = Colorselect.selectedIndex;

    // Check if an option is selected
    if (selectIndex !== -1) {
        // Remove the selected option
        Colorselect.remove(selectIndex);
    } else {
        alert('Please select a color to remove.');
    }
});
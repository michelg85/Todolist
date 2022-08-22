var addItem = document.querySelector('#addItem');
var toDoItems = [];
var message = document.querySelector('#message');

// click event for add button
addItem.addEventListener('click', function() {

  // get value of user input
  var item = document.querySelector('#item').value;
  //console.log(item);

  /* check to see if the input field is empty.
     if empty - display message */
  if (item == '') {
    message.innerHTML = 'Enter a task.';
  } else {
    // remove message
    message.innerHTML = '';

    // reset input field
    document.querySelector('#item').value = '';

    //checks to see if there is an item in array, if not, put's it in
    if (toDoItems.indexOf(item) == -1) {
      toDoItems.push(item);

      // creates new li element
      var itemAdded = document.createElement('li');
      itemAdded.innerHTML = item;
      itemAdded.className = 'added';

      // create close icon
      var closeIcon = document.createElement('p');
      closeIcon.innerHTML = 'X';
      closeIcon.className = 'delete-btn';

      // add new items to main list
      var mainList = document.querySelector('.myList');
      mainList.appendChild(itemAdded);
      mainList.appendChild(closeIcon);

      BindCloseEvents(closeIcon, itemAdded);

    } else {
      // show user a message if an item already exists      
      message.innerHTML = 'You have already added ' + '\"' + item + '\"' + '.';
    }

    console.log(toDoItems);

    // click event for close icon - removes item in list

  }
}, false);

function BindCloseEvents(closeIcon, itemAdded) {
  closeIcon.addEventListener('click', function() {
    closeIcon.parentNode.removeChild(itemAdded);
    closeIcon.parentNode.removeChild(closeIcon);
    message.innerHTML = '';

    // remove item from the array
    // find contents of item you want to delete
    var deletedItem = itemAdded.innerHTML;
    // check in console     
    console.log(deletedItem);

    // find the index of that item     
    index = toDoItems.indexOf(deletedItem);

    // check in console
    console.log(index);

    // check and remove from array 
    if (index > -1) {
      toDoItems.splice(index, 1);
    }

    // check in console to see if removed 
    console.log(toDoItems);

  }, false);

  // change UI on mouse over of closeIcon
  closeIcon.addEventListener('mouseover', function() {
    itemAdded.style.backgroundColor = '#D2D7D3';
    itemAdded.style.color = '#6C7A89';
    closeIcon.style.color = '#000';
  }, false);

  // change UI on mouse out of closeIcon
  closeIcon.addEventListener('mouseout', function() {
    itemAdded.style.backgroundColor = '#1BA39C';
    closeIcon.style.color = '#EEEEEE';
    itemAdded.style.color = '#EEEEEE';
  }, false);

  // change UI on mouse over of list  
  itemAdded.addEventListener('mouseover', function() {
    itemAdded.style.backgroundColor = '#36D7B7';
    itemAdded.style.color = '#EEEEEE';
  }, false);

  // change UI on mouse out of list
  itemAdded.addEventListener('mouseout', function() {
    itemAdded.style.backgroundColor = '#1BA39C';
  }, false);
}
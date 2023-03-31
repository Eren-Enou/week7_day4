// Grab the form
const form = document.getElementById('toDoForm');

async function handleFormSubmit(e){
    e.preventDefault(); // Prevent the event from refreshing the page
    let toDoName = e.target.toDo.value;
    console.log(toDoName);

    buildToDoCard(toDoName);
    // Clear the input box at the end
    e.target.toDo.value = '';
};

form.addEventListener('submit', handleFormSubmit);

function buildToDoCard(toDoObj){

    // Create a card div
    let card = document.createElement('div')
    card.className = 'card h-100';
    
    // Create card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Create country name and population elements
    let toDoTitle = document.createElement('h5');
    toDoTitle.className = 'card-title';
    toDoTitle.innerHTML = toDoObj;
    
    
    // Add the titleto the card body
    cardBody.append(toDoTitle);

    
    // Add card body to card
    card.append(cardBody);

    // Create a column for the row
    let col = document.createElement('div')
    col.className = 'col-12 col-md-6 col-lg-3 my-3'

    // Add the card to the column
    col.append(card);

    // Get the country display and add the column
    let display = document.getElementById('toDoDisplay');
    display.append(col);

}
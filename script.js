// DOM elements
const addTaskButton = document.getElementById('add-task-button');
const taskModal = document.getElementById('task-modal');
const closeModalButton = document.querySelector('.close');
const taskForm = document.getElementById('task-form');
const taskLists = document.querySelectorAll('.task-list');
const saveTaskButton = document.getElementById('save-task-button');

// Function to open the task modal
function openTaskModal() {
    taskModal.style.display = 'block';
}

// Function to close the task modal
function closeTaskModal() {
    taskModal.style.display = 'none';
    // Clear the form fields
    taskForm.reset();
}

// Event listeners
addTaskButton.addEventListener('click', openTaskModal);
closeModalButton.addEventListener('click', closeTaskModal);

// Function to create a new task card
function createTaskCard(title, description) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    return taskCard;
}

// Function to handle task form submission
function handleTaskFormSubmit(event) {
    event.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const selectedList = document.querySelector('select[name="task-status"]').value;

    // Create a new task card
    const newTaskCard = createTaskCard(taskTitle, taskDescription);

    // Find the appropriate task list and append the new task card
    const selectedTaskList = document.querySelector(`.task-list[data-status="${selectedList}"]`);
    selectedTaskList.appendChild(newTaskCard);

    // Close the modal
    closeTaskModal();
}

// Event listener for task form submission
taskForm.addEventListener('submit', handleTaskFormSubmit);

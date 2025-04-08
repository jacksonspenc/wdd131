const container = document.createElement('div');
container.className = 'container';

const form = document.createElement('form');
form.setAttribute('action', 'action_page.php');

// First Name
const labelFname = document.createElement('label');
labelFname.setAttribute('for', 'fname');
labelFname.textContent = 'First Name';

const inputFname = document.createElement('input');
inputFname.setAttribute('type', 'text');
inputFname.setAttribute('id', 'fname');
inputFname.setAttribute('name', 'firstname');
inputFname.setAttribute('placeholder', 'Your name..');

// Last Name
const labelLname = document.createElement('label');
labelLname.setAttribute('for', 'lname');
labelLname.textContent = 'Last Name';

const inputLname = document.createElement('input');
inputLname.setAttribute('type', 'text');
inputLname.setAttribute('id', 'lname');
inputLname.setAttribute('name', 'lastname');
inputLname.setAttribute('placeholder', 'Your last name..');

// Subject
const labelSubject = document.createElement('label');
labelSubject.setAttribute('for', 'subject');
labelSubject.textContent = 'Subject';

const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'subject');
textarea.setAttribute('name', 'subject');
textarea.setAttribute('placeholder', 'Write something..');
textarea.style.height = '200px';

// --- State Filter Section ---
const labelState = document.createElement('label');
labelState.setAttribute('for', 'state');
labelState.textContent = 'State';

const inputState = document.createElement('input');
inputState.setAttribute('type', 'text');
inputState.setAttribute('id', 'state');
inputState.setAttribute('name', 'state');
inputState.setAttribute('placeholder', 'Type your state...');

const suggestions = document.createElement('div');
suggestions.setAttribute('id', 'suggestions');

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

inputState.addEventListener('input', () => {
  const value = inputState.value.toLowerCase();
  suggestions.innerHTML = '';
  if (value) {
    const filtered = states.filter(state =>
      state.toLowerCase().includes(value)
    );
    filtered.forEach(state => {
      const option = document.createElement('div');
      option.textContent = state;
      option.addEventListener('click', () => {
        inputState.value = state;
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
      });
      suggestions.appendChild(option);
    });
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== inputState) {
    suggestions.style.display = 'none';
  }
});

const stateWrapper = document.createElement('div');
stateWrapper.style.position = 'relative';
stateWrapper.appendChild(inputState);
stateWrapper.appendChild(suggestions);

// Submit Button
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');

// Append to form
form.appendChild(labelFname);
form.appendChild(inputFname);

form.appendChild(labelLname);
form.appendChild(inputLname);

form.appendChild(labelState);
form.appendChild(stateWrapper);

form.appendChild(labelSubject);
form.appendChild(textarea);

form.appendChild(submitBtn);

container.appendChild(form);
document.getElementById('app').appendChild(container);
// Create HTML Elements using Javascript

// 1)
// Declared & Assigned
const bodyElement = document.querySelector('body');

const h1Element = document.createElement('h1');
h1Element.textContent = 'Contact Manager Assignment';

bodyElement.appendChild(h1Element)

// 2)
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'search by name or number';
inputElement.style.marginLeft = '1rem';
inputElement.style.width = '190px';
inputElement.style.color = 'blue';
inputElement.style.fontSize = '1rem'
console.log(inputElement);

bodyElement.appendChild(inputElement);

// 3)
const h2Element = document.createElement('h2');
h2Element.textContent = 'My Contacts - ';

const spanElement = document.createElement('span');
spanElement.textContent = 0;
spanElement.style.color = 'red';

h2Element.appendChild(spanElement)

bodyElement.appendChild(h2Element)

console.log(h2Element);
console.log(spanElement);

// 4)
const arrNumbers = [{
        name: 'subramanyam',
        number: '9030531770'
    },
    {
        name: 'jyothi',
        number: '9246604170'
    },
    {
        name: 'sreeramulu',
        number: '8019970883'
    },
    {
        name: 'rathnamaya',
        number: '8639301953'
    },
    {
        name: 'surya',
        number: '8790864707'
    }
]

const ulElement = document.createElement('ul');

// We use for...loop to iterate on every element in the array
function liFactory(arr) {
    for (let i = 0; i < arr.length; i++) {

        const liTag = document.createElement('li');

        liTag.textContent = `${arr[i].name} - ${arr[i].number}`;
        liTag.style.textTransform = 'capitalize';
        liTag.style.marginBottom = '1rem';
        liTag.style.color = 'teal'

        ulElement.appendChild(liTag);
    }
}

// Invoke the function
liFactory(arrNumbers)

bodyElement.appendChild(ulElement);
spanElement.textContent = arrNumbers.length;

// 5)
inputElement.addEventListener('keyup', function (e) {

    const inputResult = e.target.value.toLowerCase();

    const result = arrNumbers.filter(function (ele) {
        return ele.name.includes(inputResult) || ele.number.includes(inputResult);
    });

    ulElement.textContent = '';
    spanElement.textContent = result.length;

    liFactory(result);

});
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

console.log('JavaScript está funcionando');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

        li.append(deleteButton);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        list.append(li);

        input.value = '';
        input.focus();
    }
});
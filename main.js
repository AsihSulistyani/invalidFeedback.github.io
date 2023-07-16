const name = document.getElementById('name');
const form = document.getElementById('form');
const errorElemen = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let messages = []
   if(name.value === "" ) {
    messages.push('Name is Required')
   }

    if(messages.length > 0) {
        e.preventDefault()
        errorElemen.innerText = messages.join(',')
    }
    
});
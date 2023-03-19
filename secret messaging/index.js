document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const{ hash } = window.location;
    console.log(atob(hash.replace('#', '')));

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrpted = btoa(input.value);
    
    const message = document.querySelector('#link-input');
    message.value =   `${window.location}#${encrpted}`;
    message.select();

    


});
/*funzione per il login*/
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userGiusto = 'user';
    const passwordGiusta = '1234';

    if (username === userGiusto && password === passwordGiusta) {
        window.location.href = '/pages/giocatori.html'
    } else {
        const errore = new Error("Username o password non validi")
        alert(errore)
    }

}

/*burger menu*/
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
});
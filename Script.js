document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento click a todos los elementos con la clase 'name'
    const names = document.querySelectorAll('.name');
    
    names.forEach(name => {
        name.addEventListener('click', function() {
            // Encuentra el elemento hermano siguiente y tooglea la clase 'show'
            const info = this.nextElementSibling;
            info.classList.toggle('show');
        });
    });
});

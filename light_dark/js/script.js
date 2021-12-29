const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () =>{
    /* Muda a cor do site */
    document.body.classList.toggle('dark')
})
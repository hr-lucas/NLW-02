// procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
//  Executar uma ação
function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const field = newFieldContainer.querySelectorAll('input')
    field.forEach(function(field){
        console.log(field)
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
$input = document.querySelector('.input')
$input.value = ''

$add = document.querySelector('#add')
$equal = document.querySelector('#equal')

let sum = 0;
// length1 = $input.value.length
start = 0

$add.addEventListener('click', addData)

$equal.addEventListener('click', showData)

function getLength() {
    return $input.value.length
}

function addData(event) {
    console.log(event.target)
    let val1 = event.target.parentNode.firstElementChild.value.slice(start)
    console.log(val1)
    start = getLength()
    if (event.target.id === 'add') {
        sum += parseInt(val1)
        event.target.parentNode.firstElementChild.value += '+'
        $input.focus()
        console.log(sum)
    }
}

function showData(event) {
    val2 = event.target.parentNode.firstElementChild.value.slice(start)
    event.target.parentNode.firstElementChild.value = sum + parseInt(val2)
}
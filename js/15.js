const arr = []

$('#add').click(f1)
$('#delk').click(f2)
$('#delf').click(f3)
$('#pov').click(f4)


function f1(){
    let chis = $('#in').val()
    arr.push(chis)
    $('#out').text(arr)
    $('#in').val('')
}

function f2(){
    let name = $('#in').val()
    arr.pop() //удаляет посл элем
    //.shift - удалет перв элем
    $('#out').text(arr)
}

function f3(){
    let name = $('#in').val()
    arr.shift()
    $('#out').text(arr)
}

function f4(){
    const unique = arr.filter((x, i) => arr.indexOf(x) === i);
    $('#out').text(unique);
}
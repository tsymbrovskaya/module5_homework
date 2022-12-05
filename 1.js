let userNumber = prompt('Введите число')
userNumber = +userNumber

let userType = typeof userNumber

if (userType === 'number' && !isNaN(userNumber)) {
    let ostatok = userNumber % 2
    if (ostatok === 1) {
        alert('Число нечётное')
    } else {
        alert('Число чётное')
    }
} else {
    alert('Упс, кажется, вы ошиблись')
}
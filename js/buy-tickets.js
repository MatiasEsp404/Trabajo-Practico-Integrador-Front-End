let amount = document.querySelector('#amount')
let category = document.querySelector('#category')
let result = document.querySelector('#result')

let lastAmount = amount.value
let lastCategory = category.options[category.selectedIndex].value

const discountCalc = discount => 200 * lastAmount - 200 * lastAmount * discount / 100

setInterval(() => {
    if (lastAmount != amount.value || lastCategory != category.options[category.selectedIndex].value) {
        if (lastAmount != amount.value) {
            lastAmount = amount.value
        }
        if (lastCategory != category.options[category.selectedIndex].value) {
            lastCategory = category.options[category.selectedIndex].value
        }
        switch (lastCategory) {
            case 'student':
                result.textContent = discountCalc(80)
                break;
            case 'trainee':
                result.textContent = discountCalc(50)
                break;
            case 'junior':
                result.textContent = discountCalc(20)
                break;
            default:
                result.textContent = discountCalc(0)
                break;
        }
    }
}, 200);

const studentButton = () => category.selectedIndex = 1
const traineeButton = () => category.selectedIndex = 2
const juniorButton = () => category.selectedIndex = 3


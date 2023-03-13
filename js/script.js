// Задача 1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.


function getRandomNumbers(value,minNumber,maxNumber) {
	 return Math.floor(Math.random() * 10000) + 1
}
let userValueNumbers = parseInt(prompt("Введіть кількість елементів", "1"))
  const historyPrices = new Array(userValueNumbers)
    .fill(0)
    .map(() => getRandomNumbers(userValueNumbers,1, 10000))



document.write(`<p> Сформований рандомно масив : [${historyPrices}]</p>`)
//========================================================================================================================================================
// # 1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
const pricesThanMore_1000 = historyPrices.filter(
  (numMoreThan_1000) => numMoreThan_1000 > 1000
)

document.write(
  `<p>1. Масив у якому є тільки ті, що більші за 1000 грн.: <span>[${pricesThanMore_1000}]</span></p>`
)
//========================================================================================================================================================

// 2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const pricesNumberThanMore_1000 = []
historyPrices.map((element,index)=> {if(element > 1000) pricesNumberThanMore_1000.push(index)})

document.write(
  `<p>2. Масив у якому є номери тільки тих, що більші за 1000 грн.: <span>[${pricesNumberThanMore_1000}]</span></p>`
)

// ========================================================================================================================================================

// 3. Сформувати список з тих цін, які більші за попереднє значення
const priceslistMoreThanLast = historyPrices.filter((price,index, arr) => {
	if (price > arr[index - 1]) return price
})
document.write(
  `<p>3. Масив у якому є ті, які більші за попереднє значення: <span>[${priceslistMoreThanLast}]</span></p>`
)
//========================================================================================================================================================
//  4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

const getMaxPrice = Math.max(...historyPrices)
const getArrPercentMaxValue = historyPrices.map((price) =>
  ((price / getMaxPrice) * 100).toFixed(2)+"%"
)

document.write(`
<p>4. Масив, що міститиме значення цін у відсотках стосовно максимального
: <span>[${getArrPercentMaxValue}]</span></p>`)
//========================================================================================================================================================
//  5)Підрахувати кількість змін цін

const countChangePrice = historyPrices.reduce(
  (preveValue, element, index, arrRef) =>
    element > arrRef[index + 1] || element < arrRef[index + 1]
      ? preveValue + 1
      : preveValue,
  0
)
document.write(
  `<p>5. Кількість змін цін : <span>${countChangePrice}</span></p>`
)
//========================================================================================================================================================
// 6)Визначити, чи є ціна, що менше 1000
const isSomePriceLowThan1000 = historyPrices.some((prices) => prices < 1000)

document.write(
  `<p>6. Чи є ціна, що менше 1000: <span>${isSomePriceLowThan1000}</span></p>`
)

//========================================================================================================================================================

//   7)Визначати, чи усі ціни більше за 1000

const isAllPrisecMoreThan1000 = historyPrices.every((prices) => prices > 1000)

document.write(
  `<p>7. Чи усі ціни більше за 1000: <span>  ${isAllPrisecMoreThan1000}</span></p>`
)
//========================================================================================================================================================
//   8)Підрахувати кількість цін, що більше за 1000

let getCountPrisecMoreThan1000 = historyPrices.reduce(
  (prevValue, element) => (element > 1000 ? prevValue + 1 : prevValue),
  0)
document.write(
  `<p>8. Підрахувати кількість цін, що більше за 1000: <span>(${getCountPrisecMoreThan1000})</span></p>`
)
//========================================================================================================================================================
// 9)Підрахувати суму цін, що більше за 1000

const SumPricesThanMore1000 = historyPrices.reduce(
  (prevValue, element) => (element > 1000 ? (prevValue += element) : prevValue),
  0
)
document.write(
  `<p>9. Сума цін, що більше за 1000 становить : <span>${SumPricesThanMore1000}</span></p>`
)
//========================================================================================================================================================
// 10)Знайти першу ціну, що більше за 1000
 const getFirstPriceThanMore1000 = historyPrices.find((price) => price > 1000)

document.write(
  `<p>10. Перша ціна, що більше за 1000 :<span>${getFirstPriceThanMore1000}</span></p>`
)
//========================================================================================================================================================
// 11)Знайти індекс першої ціни, що більше за 1000

const getIndexFirstPrice = historyPrices.findIndex((price) => price > 1000)

document.write(
  `<p>11.Індекс першої ціни, що більше за 1000 : <span>${getIndexFirstPrice}</span></p>`
)

//========================================================================================================================================================
// 12)Знайти останню ціну, що більше за 1000
const getLastPriceThanMore1000 = historyPrices.findLast((price) => price > 1000)

document.write(
  `<p>12.Остання ціна, що більше за 1000: <span>${getLastPriceThanMore1000}</span></p>`
)

//========================================================================================================================================================
// 13)Знайти індекс останньої ціни, що більше за 1000

const getLastIndexThanMore1000 = historyPrices.findLastIndex(
  (price) => price > 1000
)

document.write(
  `<p>13.Індекс останньої ціни, що більше за 1000: <span>${getLastIndexThanMore1000}</span></p>`
)


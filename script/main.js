'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const saleCostInput = document.querySelector('.input-sale-cost'),
          matcapitalSumInput = document.querySelector('.input-matcapital-sum'),
          realestateSquareInput = document.querySelector('.input-realestate-square'),
          kidsNumInput = document.querySelector('.input-kids-num'),
          marriageCheckbox = document.querySelectorAll('.marriage-checkbox'),
          kidsShareResultInner = document.querySelector('.kids-share-result'),
          calcBtn = document.querySelector('.calc-btn');
    
    let saleCost,
        matcapitalSum,
        realestateSquare,
        kidsNum,
        familyNum,
        marriage,
        kidsShareResult;
    
    calcBtn.addEventListener('click', () => {
        saleCost = +saleCostInput.value;
        matcapitalSum = +matcapitalSumInput.value;
        realestateSquare = +realestateSquareInput.value;
        kidsNum = +kidsNumInput.value;
        
        if (marriageCheckbox[0].checked) {
            marriage = marriageCheckbox[0].value;
        } else {
            marriage = marriageCheckbox[1].value;
        }
        
        if (marriage === 'marriage') {
            familyNum = 2 + kidsNum;
        } else {
            familyNum = 1 + kidsNum;
        }

        const percentMatcapital = ((matcapitalSum * 100) / saleCost) / 100;
        const percentRealestateSquare = realestateSquare * percentMatcapital;
        const squareForFamily = percentRealestateSquare / familyNum;
        

        console.log(+squareForFamily.toFixed(1)); 

    });
/* вычислить процент мат капитала от общей стоимости. 
умножить площадь на процент мат капитала. 
посчитать кол-во членов семьи. 
разделить процент площади на кол-во членов семьи. 
вычислить минимальную площадь детей и минимальную долю детей */

});
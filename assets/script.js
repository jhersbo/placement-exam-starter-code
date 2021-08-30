let yourName = "Jack Ersbo" 

// Global Variables
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total count

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// gb "+" button clicks
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    let gbQuantity = document.getElementById('qty-gb')
    gbQuantity.textContent = `${gb}`
    total++
    document.getElementById('qty-total').textContent = `${total}`
})

// gb "-" button clicks
document.getElementById('minus-gb').addEventListener('click', function(){
    if(gb > 0){
        gb--
        let gbQuantity = document.getElementById('qty-gb')
        gbQuantity.textContent = `${gb}`
        total--
        document.getElementById('qty-total').textContent = `${total}`
    }
})

// cc "+" button clicks
document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    let ccQuantity = document.getElementById('qty-cc')
    ccQuantity.textContent = `${cc}`
    total++
    document.getElementById('qty-total').textContent = `${total}`
})

// cc "-" button clicks
document.getElementById('minus-cc').addEventListener('click', function(){
    if(cc > 0){
        cc--
        let ccQuantity = document.getElementById('qty-cc')
        ccQuantity.textContent = `${cc}`
        total--
        document.getElementById('qty-total').textContent = `${total}`
    }
})

// sugar "+" button clicks
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    let sugarQuantity = document.getElementById('qty-sugar')
    sugarQuantity.textContent = `${sugar}`
    total++
    document.getElementById('qty-total').textContent = `${total}`
})

// sugar "-" button clicks
document.getElementById('minus-sugar').addEventListener('click', function(){
    if(sugar > 0){
        sugar--
        let sugarQuantity = document.getElementById('qty-sugar')
        sugarQuantity.textContent = `${sugar}`
        total--
        document.getElementById('qty-total').textContent = `${total}`
    }
})
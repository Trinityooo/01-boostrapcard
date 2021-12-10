// 單品項目
let listItems =document.querySelectorAll(".order-list");
// 單品數量
let inputItems = document.querySelectorAll(".order-input");
console.log(inputItems);
// 按鈕-
let reduceBtns = document.querySelectorAll(".order-reduce");
// 按鈕+
let addBtns = document.querySelectorAll(".order-plus");
// 單品總價
let priceItems =document.querySelectorAll(".order-price");
// 單品總價 利用數字
let fakeItems =document.querySelectorAll(".order-price-fake");
// 購物車總 數量
let chartQty = document.querySelector(".qty");
// 購物車總 小計
let chartSubtotal = document.querySelector(".subtotal");
// 購物車總 運費
let chartFee = document.querySelector(".fee");
// 購物車總 總計
let chartTotal = document.querySelector(".total");




// 按鈕-
reduceBtns.forEach(function(btn, index){
    btn.addEventListener('click',function(){
        if (inputItems[index].value == 1) {
            let replace = confirm("是否要移除該商品?");
            if (replace) {
                listItems[index].remove();
            }else{
                return;
            }
        }
        inputItems[index].value = Number(inputItems[index].value) - 1;
        // console.log(typeof(inputItems[index]));
        price (index);
        chartCount();
    });
});

// 按鈕+
addBtns.forEach(function(btn, index){
    btn.addEventListener('click',function(){
        inputItems[index].value = Number(inputItems[index].value) + 1;
        price (index);
        chartCount();
    });
});

// 單品總價 計算
function price (index){
    priceItems[index].innerHTML = parseInt(fakeItems[index].textContent) * inputItems[index].value;
    // console.log(priceItems[index].textContent);
    // console.log(fakeItems[index].textContent);
    // console.log(inputItems[index].value);
};


// 購物車總共 初始
function Initial(){
    
}




// 購物車總共
// 數量
// 小計
// 運費
function chartCount(){
    let qty = 0;
    let subtotal = 0;
    let fee = 60;

    for (let i = 0; i < listItems.length; i++){
        qty += parseInt(inputItems[i].value);
        subtotal += parseInt(priceItems[i].textContent);
        // chartQty = inputItems ;
        // console.log(priceItems[i].textContent);
    }

    if (subtotal >= 100) fee = 0;
    
    
    chartQty.innerHTML = qty;
    chartSubtotal.innerHTML = "$" + subtotal;
    chartFee.innerHTML = "$" + fee;
    chartTotal.innerHTML = "$" + (subtotal + fee);


    // console.log(subtotal);
}
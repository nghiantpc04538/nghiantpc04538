var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}
const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
  var btnItem = event.target
  var product = btnItem.parentElement
  var productImg = product.querySelector("img").src
  var productName = product.querySelector("H1").innerText
  var productPiece = product.querySelector("span").innerText
  //console.log(productPiece,productName,productImg)
  addcart(productPiece,productName,productImg)
}})

})
function addcart(productPiece,productName,productImg){
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title")
      if(productT[i].innerHTML == productName){
        // alertE = "sản phẩm của bạn đã có trong giỏ hàng"
        alert("sản phẩm của bạn đã có trong giỏ hàng")
        return
      }
    }
  var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class = "title">'+productName+'</span></td><td><P><span class = "prices">'+productPiece+'</span><sup>đ</sup></P></td><td><input style="width:30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class = "cart-delete">Xóa</span></td></tr>'
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  //console.log(cartTable)
  cartTable.append(addtr)
  carttotal()
  deleteCart()
}
function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr")
  var totalC = 0
  // console.log(cartItem)
  for(var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value
    // console.log(inputValue)
    var productPiece = cartItem[i].querySelector(".prices").innerHTML
    // console.log(productPiece)
    totalA = inputValue*productPiece*1000
    // console.log(totalA)
    totalB = totalA.toLocaleString('nghia-Tr')
    // console.log(totalB)
    totalC = totalC + totalA
    // console.log(totalC)
    // totalD = totalC.toLocaleString('nghia-Tr')
  }
  var carttotalA = document.querySelector(".price-total span")
  var cartPrice = document.querySelector(".cart-icon span")
  carttotalA.innerHTML = totalC.toLocaleString('nghia-Tr')
  cartPrice.innerHTML = totalC.toLocaleString('nghia-Tr')
  inputchange()
}
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete")
    productT[i].addEventListener("click",function(event){
      var cartDelete = event.target
      var cartitemR = cartDelete.parentElement.parentElement
      cartitemR.remove()
      carttotal ()
      // console.log(cartitemR)
    })
    }
}
function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
       carttotal ()
    })
    }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-cart-arrow-down")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})
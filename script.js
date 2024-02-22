const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener('click', function handelar(event){
       const name = event.target.parentNode.childNodes[3].innerText;
      const price = event.target.parentNode.childNodes[5].childNodes[1].innerText;
     
      const addElement = document.getElementById('add-element');

      const div = document.createElement('div');
      div.classList.add('flex', 'justify-around', 'border-b', 'mt-5')

      const p1 = document.createElement('p');
      const p2 = document.createElement('p');

      p1.innerText = name;
      p2.innerText = price;

      div.appendChild(p1);
      div.appendChild(p2)
      addElement.appendChild(div)


    updateTotalPrice(price)
    grandTotalPrice()
    });
}

function grandTotalPrice(grandPrice){
    const totalPrice = getValueConverte("total-Price");
    if(grandPrice == undefined){
        document.getElementById("total").innerText = totalPrice;
    }
    else{
        const discountPrice = document.getElementById('input-field').value;
        if(discountPrice == "SELL 200"){
            const discount = totalPrice * 0.2;
            document.getElementById('discountPrice').innerText = parseInt(discount);
            const discountValue = totalPrice - discount;
            document.getElementById('total').innerText = parseInt(discountValue);
        }
        else(
           alert('ওরে বাট-পার কুপন ছাড়া ডিসকাউন্ট')
        )
    }
}

function updateTotalPrice(value){
    const totalPrice = getValueConverte("total-Price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-Price").innerText = sum;
}

function getValueConverte(id){
    const number = document.getElementById(id).innerText;
    const numberConverte = parseInt(number);
    return numberConverte;
}
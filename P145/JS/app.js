if(localStorage.getItem('basket') === null){
    localStorage.setItem('basket', JSON.stringify([]))
}

let button = document.querySelectorAll('.aa');

for(let a of button){
    a.addEventListener('click', function(e){
        e.preventDefault()
        let basket = JSON.parse(localStorage.getItem('basket'))
        let productImg = e.target.parentElement.previousElementSibling.src;
        let pruductID = e.target.parentElement.parentElement.id;
        let productPrice = e.target.previousElementSibling.previousElementSibling.innerHTML;
        let productName = e.target.previousElementSibling.innerHTML;

        let existProd = basket.find(x => x.ID === pruductID);
        if(existProd === undefined)
        {
            basket.push({
                ID: pruductID,
                Name:productName,
                Iamge:productImg,
                Price:productPrice,
                Count: 1
            })
        }
        else{
            existProd.Count++;
        }
        
        localStorage.setItem('basket', JSON.stringify(basket))
        CountProduct()
    })
}

function CountProduct(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    let span = document.getElementById('span');
    span.innerHTML = basket.length;
}
CountProduct()






    



window.onload = function(){


    let produtos = [
        {desc: 'Mamão Papaia', preco: 3.80},
        {desc: 'Laranja', preco: 2.50}, 
        {desc: 'Manga', preco: 4.90},
        {desc: 'Melão', preco: 5.70},
        {desc: 'Melancia', preco: 6.98},
        ];
        
    const listaProd = document.querySelector("#produtos");
    const compraCli = document.querySelector("#cestaDoCliente");
    const totalCompra = document.querySelector("#mostraTotalCompra");
        
    ( ()=>{
         for (let prod of produtos){
            const li = document.createElement("li");
            for (listaP in prod){
                if (listaP == "preco"){
                    listaProd.appendChild(li).setAttribute("data-preco", prod[listaP]);
                } else {
                  listaProd.appendChild(li).textContent = `${prod[listaP]}`;
                }
            }
        }
    } )(produtos)
    
    let cestaCli = [];
    let compraItem = document.querySelectorAll("#produtos > li");
    let valorTotal = 0;
        
    compraItem.forEach(function(item){
        item.addEventListener('click',function(){
            if (cestaCli.indexOf(item.textContent) != -1){
                alert("Este item já está na sua cesta!")
            } else {
                valorTotal += Number(item.dataset.preco);
                cestaCli.push(item.textContent);
                let prodCesta = document.createElement('li');
                compraCli.appendChild(prodCesta).textContent = item.textContent;
                totalCompra.value = valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            }
        })
    })
    }
    


async function recuperaGatti(){
    const response = await fetch('https://cataas.com/api/tags')
    const responseJson = await response.json();
    const primoRecupero = responseJson.slice(5, 11)
    const secondoRecupero = responseJson.slice(15, 21)
    const arrGatti = primoRecupero.concat(secondoRecupero) 
    const select = document.querySelector('.scelta')
    
    arrGatti.forEach(gatto => {
        let gattoSelezionado = document.createElement('option')
        gattoSelezionado.textContent = gatto;
        gattoSelezionado.value = gatto;
        select.appendChild(gattoSelezionado)
    }) 

    async function chiamata(){
        select.addEventListener('change', async()=> {
            const gattoCasualeResponse = await fetch(`https://cataas.com/cat/${select.value}?json=true`)
            const gattoFinale = await gattoCasualeResponse.json()
            
            const img = document.createElement('img')
            document.body.appendChild(img);
            img.src = `https://cataas.com${gattoFinale.url}`

            let pam = document.createElement('h2');
            document.body.appendChild(pam)
            pam.textContent = gattoFinale.tags.join('-');

        })
    }

    chiamata()

    
    

    
}

recuperaGatti()
async function cata(){
    const cataas = await fetch('https://cataas.com/api/tags')
    let json =await cataas.json();
    console.log(json);
    let num1 = json.slice(4,9);
    let num2= json.slice(14,19);

}
cata()

let container = document.getElementById('div');

let newnod = document.createElement('li')
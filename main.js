document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://crystal-name-meaning.herokuapp.com/api/${crystalName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#cname').innerText = data.crystalname
        document.querySelector('#cbenefits').innerText = data.crystalbenefits
    }catch(error){
        console.log(error)
    }
}
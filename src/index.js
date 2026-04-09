

function Buscar(event){

event.preventDefault();
search = document.getElementById('search').value;
console.log(search);

fetch(`https://restcountries.com/v3.1/name/${search}`,{
method:"GET",
headers: {
   "Content-Type":"application/json"
}
})

.then(response => response.json())
.then (data =>{
console.log(data[0])

informacao = document.getElementById('informacao');
informacao.innerText = "Name:" + data[0].name.common;

informacao2 = document.getElementById('informacao2');
informacao2.innerText = "Population:" + data[0].population;

informacao3 = document.getElementById('informacao3');
informacao3.innerText = "Independent:" + data[0].independent;

informacao3 = document.getElementById('informacao4');
informacao4.innerText = "Capital:" + data[0].capital;

informacao5 = document.getElementById('informacao5');
informacao5.innerText = "UnMember:" + data[0].unMember;

informacao6 = document.getElementById('informacao6');
informacao6.innerText = "Languages:" + data[0].languages.eng;
})


}
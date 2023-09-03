//searchinput
//searchbtn
const dictionary=(word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4407fdd6ebmsh10ecf1ed6adb12cp18b4a0jsn9f458cf32c77',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
          }
    };
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word , options)
    .then(response => response.json())
    .then((response)=>{
        
        wordheading.innerHTML=response.word;
        definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3");
    })
    .catch(err=>console.error(err));
}
searchbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
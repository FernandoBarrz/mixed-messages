console.log("List of Cities in the Americas");
console.log("Every time you execute this program, it generates a NEW random set of cities");


const citiesData = [
    [['Tlapacoya'],['Ixtapaluca'], ['Mexico']],
    [['Aspero'], ['Norte Chico'], ['Peru']],
    [['Kaminaljuyu'],['Guatemala city'], ['Guatemala']],
    [['Cholula'],['Puebla'], ['Mexico']],
    [['Cuenca'],['Azuay'], ['Ecuador']],
    [['Teotihuacan'],['Mexico'], ['Mexico']],
    [['Cahokia'],['Illinois'], ['United States']],
];



const generateCityData = (citiesData) => {
    function randomEntries(){
        let randomNumbers = [];
        let ranNum = 0
        for(let i = 0; i < citiesData.length; i++ ){
            ranNum = Math.floor(Math.random() * citiesData.length)
            randomNumbers.push(ranNum)
            
        }
        console.log(randomNumbers);
        
        const messageData = citiesData[randomNumbers[3]]
        return messageData
        

        
    }
    return `The City is ${randomEntries()}`
}
console.log( generateCityData(citiesData));
console.log("\n\t\t\tList of Cities in the Americas");
console.log("Every time you execute this program, it generates a NEW random set of cities");


const citiesData = [
    [['Tlapacoya'],['Ixtapaluca'], ['Mexico']],
    [['Aspero'], ['Norte Chico'], ['Peru']],
    [['Kaminaljuyu'],['Guatemala city'], ['Guatemala']],
    [['Cholula'],['Puebla'], ['Mexico']],
    [['Cuenca'],['Azuay'], ['Ecuador']],
    [['Teotihuacan'],['Mexico'], ['Mexico']],
    [['Cahokia'],['Illinois'], ['United States']],
    [['Cotuí'],['Sánchez Ramírez'], ['Dominican Republic']],
    [['Panama City'],['Panamá'], ['Panama']],
    [['San Juan'],['Puerto Rico'], ['United States']],
    [['Santa Marta'],['Magdalena'], ['Colombia']],
];



const generateCityData = (citiesData) => {
    function randomEntries(){
        let ranNum1, ranNum2, ranNum3;
        
        ranNum1 = Math.floor(Math.random() * citiesData.length )
        ranNum2 = Math.floor(Math.random() * citiesData.length)
        ranNum3 = Math.floor(Math.random() * citiesData.length)
        
    
        //console.log(randomNumbers);
        
        const messageData = `
            1st City to visit 
            The City named ${citiesData[ranNum1][0]} in the ${citiesData[ranNum1][1]} state of ${citiesData[ranNum1][2]} \n 
            2nd City to visit
            The City named ${citiesData[ranNum2][0]} in the ${citiesData[ranNum2][1]} state of ${citiesData[ranNum2][2]}\n
            3rd City to visit 
            The City named ${citiesData[ranNum3][0]} in the ${citiesData[ranNum3][1]} state of ${citiesData[ranNum3][2]}\n 
        `
        //console.log(messageData);
        return messageData
        

        
    }
    return randomEntries()
}
console.log(generateCityData(citiesData));
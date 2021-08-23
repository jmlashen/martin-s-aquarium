const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
		image: "bluefish.jpg",
		species: "Trigger",
		length: 7,
		waterType: "Salt",
		harvestLocation: "Costa Rica"
    },
	{
        name: "Mr Freeze",
        food: "Meal Worms",
		image: "cat.jpg",
		species: "Tang",
		length: 3,
		waterType: "Salt",
		harvestLocation: "Florida"
    },
	{
        name: "Nemo",
        food: "Goldfish",
        image: "crazy-fish.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
	{
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
	{
        name: "Karen",
        food: "Algae",
        image: "Gold.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"
    },
	{
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
    
    {
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
    
    {
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
	
    {
        name: "Bruce",
        food: "not fish",
        image: "pinkfish.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
	{
        name: "Bloat",
        food: "shrimp",
        image: "purplefish.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
	{
        name: "Gordon",
        food: "Krill",
        image: "yellowbluefish.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },

    {
        name: "Tessema",
        food: "Tacos",
        image: "yellowbluefish.jpg",
        species: "Goldfish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "America"
    }
]


export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    //fish taco holds onto each object as it works through it
    //if the lenght has the remainder of 0 when divided by 3
    //then push the item to this array

    for (const fishtaco of fishCollection) {
        if (fishtaco.length % 3 === 0) //needs the === 0
        // if (!(fishtaco.length % 3)) // <-- THIS ALSO WORKS
        holyFishArray.push(fishtaco);
    
    }
    //console.log("holyfisharray", holyFishArray)
    //getMostHolyFish();
    return holyFishArray
}

    export const getSoldierFish = () => {
        const getSoldierFishArray = [];

        for (const fishObj of fishCollection){
            if (fishObj.length % 5 === 0){
                getSoldierFishArray.push(fishObj);
            }
        }
    return getSoldierFishArray;
}
//getMostHolyFish();
//







































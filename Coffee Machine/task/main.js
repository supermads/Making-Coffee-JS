function calculateNeededIngredients (){
    const input = require('sync-input');
    let coffee = input("Write how many cups of coffee you will need:");
    let water = coffee * 200;
    let milk = coffee * 50;
    let beans = coffee * 15;
    console.log(`For ${coffee} cups of coffee you will need:`);
    console.log(`${water}  ml of water\n${milk} ml of milk\n${beans} g of coffee beans`);
}

calculateNeededIngredients();

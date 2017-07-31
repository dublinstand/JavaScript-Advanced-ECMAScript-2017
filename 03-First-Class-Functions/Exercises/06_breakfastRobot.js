//Your task is to write the management software for a breakfast chef robot – it needs to take orders, keep track of available ingredients and output an error if something’s wrong. Someone else has already installed the cooking instructions, so your module needs to plug into the system and only take care of orders and ingredients. And since this is the future and food is printed with nano-particle beams, all ingredients are microelements – protein, carbohydrates, fat and flavours. The library of recipes includes the following meals:
//•	Apple – made with 1 carb and 2 flavour
//•	Coke – made with 10 carb and 20 flavour
//•	Burger – made with 5 carb, 7 fat and 3 flavour
//•	Omelet – made with 5 protein, 1 fat and 1 flavour
//•	Cheverme – made with 10 protein, 10 carb, 10 fat and 10 flavour
//The robot receives instructions either to restock the supply, cook a meal or report statistics. The input consists of one of the following commands:
// •	restock <microelement> <quantity> – increases the stored quantity of the given microelement
//•	prepare <recipe> <quantity> – use the available ingredients to prepare the given meal
//•	report – return information about the stored microelements, in the order described below, including zero elements
//The robot is equipped with a quantum field storage, so it can hold an unlimited quantity of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an error message should be returned. Their availability is checked in the order in which they appear in the recipe, so the error should reflect the first requirement which wasn’t met.
//Input
//Instructions are passed as a string argument to your management function. It will be called several times per session, so internal state must be preserved throughout the entire session.
//Output
//The return value of each operation is one of the following strings:
//•	Success – when restocking or completing cooking without errors
//•	Error: not enough <ingredient> in stock – when the robot couldn’t muster enough microelements
//•	protein={qty} carbohydrate={qty} fat={qty} flavour={qty} – when a report is requested, in a single string
//Constraints
//•	Recipes and ingredients in commands will always have valid names.

let breakfastRobot = (() => {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(microelement, quantity) {
        ingredients[microelement] += Number(quantity);
        return "Success";
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        let successMessage = "Success";

        switch (recipe) {
            case"apple":
            {
                if (ingredients['carbohydrate'] < quantity * 1) {
                    return "Error: not enough carbohydrate in stock";
                }
                else if (ingredients['flavour'] < quantity * 2) {
                    return "Error: not enough flavor in stock";
                }

                ingredients['carbohydrate'] -= quantity;
                ingredients['flavour'] -= quantity * 2;

                return successMessage;
            }
            case "coke":
                if (ingredients['flavour'] < quantity * 20) {
                    return "Error: not enough flavour in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 10) {
                    return "Error: not enough carbohydrate in stock";
                }

                ingredients['flavour'] -= quantity * 20;
                ingredients['carbohydrate'] -= quantity * 10;
                return successMessage;

            case "burger":
                if (ingredients['flavour'] < quantity * 3) {
                    return "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity * 7) {
                    return "Error: not enough fat in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 5) {
                    return "Error: not enough carbohydrate in stock";
                }

                ingredients['flavour'] -= quantity * 3;
                ingredients['fat'] -= quantity * 7;
                ingredients['carbohydrate'] -= quantity * 5;
                return successMessage;

            case "omelet":
                if (ingredients['flavour'] < quantity) {
                    return "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity) {
                    return "Error: not enough fat in stock";
                }
                if (ingredients['protein'] < quantity * 5) {
                    return "Error: not enough protein in stock";
                }

                ingredients['flavour'] -= quantity;
                ingredients['fat'] -= quantity;
                ingredients['protein'] -= quantity * 5;
                return successMessage;

            case "cheverme":
                if (ingredients['flavour'] < quantity * 10) {
                    return "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity * 10) {
                    return "Error: not enough fat in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 10) {
                    return "Error: not enough carbohydrate in stock";
                }
                if (ingredients['protein'] < quantity * 10) {
                    return "Error: not enough protein in stock";
                }

                ingredients['flavour'] -= quantity * 10;
                ingredients['fat'] -= quantity * 10;
                ingredients['carbohydrate'] -= quantity * 10;
                ingredients['protein'] -= quantity * 10;
                return successMessage;
        }
    }

    function report() {
        return `protein = ${ingredients['protein']} carbohydrate =  ${ingredients['carbohydrate']}, fat = ${ingredients['fat']}, flavour = ${ingredients['flavour']}`
    }

    return function (command) {
        let tokens = command.split(' ');

        //the first token is the action, assign it to this variable and remove it from the tokens
        let action = tokens.shift();

        switch (action) {
            case "restock":
                return restock(tokens[0], tokens[1]);
            case "prepare":
                return prepare(tokens[0], tokens[1]);
            case "report":
                return report();
        }
    }
})
();

console.log(breakfastRobot('restock flavour 50'));
console.log(breakfastRobot('prepare coke 4'));
console.log(breakfastRobot('restock carbohydrate 10'));
console.log(breakfastRobot('restock flavour 10'));
console.log(breakfastRobot('prepare apple 1'));
console.log(breakfastRobot('restock fat 10'));
console.log(breakfastRobot('prepare burger 1'));
console.log(breakfastRobot('report'));


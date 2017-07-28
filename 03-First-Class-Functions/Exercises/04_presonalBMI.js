//A wellness clinic has contacted you with an offer – they want you to write for them a program that composes patient
//charts and performs some preliminary evaluation of their condition. The data comes in the form of several arguments,
//describing a person – their name, age, weight in kilograms and height in centimeters. Your program must compose this
//information into an object and return it for further processing.
//The patient chart object must contain the following properties:
//•	name
//•	personalInfo, which is an object holding their age, weight and height as properties
//•	BMI – body mass index. You can find information about how to calculate it here: https://en.wikipedia.org/wiki/Body_mass_index
//•	status
//The status is one of the following:
//•	underweight, for BMI less than 18.5;
//•	normal, for BMI less than 25;
//•	overweight, for BMI less than 30;
//•	obese, for BMI 30 or more;
//Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional property
//called recommendation and set it to “admission required”.
//Input
//Your function needs to take four arguments – name, age, weight and height
//Output
//Your function needs to return an object with properties as described earlier.
//All numeric values should be rounded to the nearest whole number. All fields should be named exactly as described,
//their order is not important. Look at the sample output for more information.

function personalBmi(name, age, weight, height) {
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / (height * height / 10000))
    };

    //here we cover the if statement and assign a new property for the patient
    //if obj.BMI < 18.5, then status = underweight, else go to the next verification to the right
    //if it is more than 30, status = obese
    patient.status = patient.BMI < 18.5 ? "underweight" : patient.BMI < 25 ? "normal" : patient.BMI < 30 ? "overweight" : "obese";

    if(patient.status == 'obese'){
        patient.reccomendation = 'admission required';
    }

    return patient;
}

console.log(personalBmi('Peter', 29, 75, 182));
console.log(personalBmi('Honey Boo Boo', 9, 57, 137));

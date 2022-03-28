const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Reference
//const dogsTrainedUnderTen = dogs.filter((dog) => dog.isTrained && dog.age < 10)
//   console.log('Exercise 6:',dogsTrainedUnderTen);

//problem 2
const usersWithManyLanguages = users.filter((user) => user.languages.length >= 3)
console.log(usersWithManyLanguages);
//problem 2

//Reference
// const dogNameArray = dogs.map((element) => element.dogName) ;
// console.log('Exercise 1:', dogNameArray);

//problem 3
const arrayOfEmails = users.map((element) => element.email)
console.log(arrayOfEmails);
//problem 3

//Reference
// const dogAgeTotal = dogs.reduce((previousValue,currentValue) =>
//     previousValue + currentValue.age,0);//set initial value to 0 so return is not an object but a number

//problem 4
const totalYearsOfExperience = users.reduce((previousValue,currentValue) =>
previousValue + currentValue.yearsOfExperience,0)
console.log(totalYearsOfExperience)

let averageYearsOfExperience = totalYearsOfExperience/users.length;
console.log(averageYearsOfExperience)
//problem 4

//problem 5
let emailLengthCheck = users.reduce((previousValue,currentValue) =>{
    if (currentValue.email.length > previousValue.length){
        previousValue = currentValue.email
    }
    return previousValue
    }
    ,'')
console.log(emailLengthCheck)

//problem 6
//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin
let arrayOfNames = []
for (let i = 0; i < users.length; i++){
    arrayOfNames.push(users[i].name)
    }
console.log(arrayOfNames)

let listOfUsersNames = arrayOfNames.reduce((previousValue,currentValue) => {
    console.log('your instructors are: ' + arrayOfNames.join(','))
})

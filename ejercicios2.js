/*const cities = {
    1: "New York",
    2: "San Francisco",
    3: "London",
};

const users = [
    {id: 1, name: "David", city: "San Francisco"},
    {id: 2, name: "John", city: "London"},
    {id: 3, name: "Kathane", city: "Brazil"}
];*/

function todo(){
    return {
        cities: function(){
            return {
                1: "New York",
                2: "San Francisco",
                3: "London",
            }
        },
        users: function(){
            return [
                {id: 1, name: "David", city: "San Francisco"},
                {id: 2, name: "John", city: "London"},
                {id: 3, name: "Kathane", city: "Brazil"}
            ]
        }
    }
}

//console.log(todo().cities()[1]);
//console.log(todo().users()[1].name);

const getUsers =()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(todo().users()), 1000)
    })
}

const getCities =()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(todo().cities()), 1000)
    })
}

async function getInfo(){
    const user = await getUsers();
    const city = await getCities();
    console.log(user);
    console.log(city);
}

getInfo();

function calcular(n){

    return {
        increase: ()=>{
            return n++
        },
        getCount: ()=>{
            return n
        }
    }
}
let number = calcular(4);
number.increase();
console.log(number.getCount());

function hola(name){
    return "Hola soy "+name;
}

function say(name, callback){
    return callback(name);
}

console.log(say("David", hola));

const david = {
    name: "david",
    lastName: "castellanos"
}

const jose = {
    name: "jose",
    lastName: "Carmenate"
}

function saludar(){
    console.log("Hola, soy "+ this.name+" "+ this.lastName);
}

saludar.call(david); // Using call method

const sayJose = saludar.bind(jose); // Using bind method
sayJose();

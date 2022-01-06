////  THIS

const person = {
    name: "gabi",
    sayHello: function(){
        console.log("hola soy "+ this.name);
    }
}

person.sayHello();

const action = person.sayHello;
action();

// THIS EN EL CONTEXTO DE UNA CLASE

function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log("Me llamo "+ this.name);
}

const angela = new Person("Angela");
angela.sayHello();

/// Metodos CALL, APPLY, BIND

// USANDO CALL
function saludar(){
    console.log("Hola soy "+this.name+"  "+this.apellido);
}
const richard = {
    name: "Richard",
    apellido: "Castellanos Zayas"
}

saludar.call(richard);

function caminar(metros, direccion) {
    console.log(this.name + " camina " + metros +" metros hacia el " + direccion);
}
caminar.call(richard, 400, "norte")

caminar.apply(richard, [800, "noreste"]);

// BIND crea una nueva funcion

const daniel = {
    name: "Daniel",
    apellido: "Sanchez"
}
const danielSaluda = saludar.bind(daniel);
danielSaluda();

//const danielCamina = caminar.bind(daniel);
const danielCamina = caminar.bind(daniel, 200);
//danielCamina(1000, "este");
danielCamina("este");

//  Curryng es cuando pasamos los argumentos a una funcion de forma parcial como arriba

//PROTOTYPES  OJOOOOOOOOO

const cities = {
    1: "New York",
    2: "San Francisco",
    3: "London",
};

const users = [
    {id: 1, name: "David", city: "San Francisco"},
    {id: 2, name: "John", city: "London"},
    {id: 3, name: "Kathane", city: "Brazil"}
];

const getUsers = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(users), 2000);
    })
}

const getCities = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(cities),1000);
    })
}

async function getInfo(){
    returnedUsers = await getUsers();
    returnedCities = await getCities();
    console.log(returnedCities);
    console.log(returnedUsers);
}

getInfo();
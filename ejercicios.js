// Callback function

function sum(num1, num2) {
    return num1 + num2;
  }
  
  function rest(num1, num2) {
    return num1 - num2;
  }
  
  function calc(num1, num2, callback){
    return callback(num1, num2);
  }
  
  console.log(calc(3,4, sum));
  console.log(calc(10,9,rest));
  
  function sayHello(name){
    return "Hello "+name;
  }
  
  function sayBye(name){
    return "Bye "+name;
  }
  
  function say(name, callback){
    return callback(name);
  }
  
  console.log(say("David", sayHello));
  console.log(say("David", sayBye));
  
  
  function mayorDeEdad(name, edad){
    if (edad >= 18) {
      return name + " es mayor de edad con " + edad;
    }else{
      return menorDeEdad();
    }
  }
  
  function menorDeEdad(name, edad){
    if (edad < 18) {
      return name + " es menor de edad con " + edad;
    }
  }
  
  function edad(name, edad, callback){
    return callback(name, edad);
  }
  
  console.log(edad("David", 3, mayorDeEdad));
  
  // Asyn Await
  
  const doSomethingAsync = ()=>{
    return new Promise((resolve, reject) => {
      (true) 
        ? setTimeout(() => resolve("Do Something Async"), 3000)
        : reject(new Error("Test Error"))
      });
  }
  
  const doSomething = async ()=>{
    const something = await doSomethingAsync();
    console.log(something);
  };
  
   console.log("Before");
   doSomething();
   console.log("After");
  
  const anotherFunction = async ()=>{
    try {
      const something = await doSomethingAsync();
      console.log(something);
    } catch (error) {
      console.error(error)
    }
  }
  
  console.log("Before 1");
  anotherFunction();
  console.log("After 1");
  
  // Closures
  function makeColorPrinter(color) {
    let colorMessage = "The color is " + color;
    return function(){
      console.log(colorMessage);
    }
  }
  
  let greenColorPrinter = makeColorPrinter("green");
  console.log(greenColorPrinter()) ;
  
  // Variables Privadas
  
  /*function makeCounter(n){
    let count = n;
  
    return{
      increase : function(){
        return count++
      },
      decrease : function(){
        return count--
      },
      getCount: function(){
        return count
      }
    }
  }
  
  let counter = makeCounter(0);
  /*console.log(counter.getCount());
  counter.increase();
  console.log(counter.getCount());
  
  while (counter.getCount() <= 30) {
    console.log(counter.getCount());
    counter.increase();
  }*/
  
  function makeCounter(n,){
    let count = n;
  
    return{
      increase: function(){
        return count ++;
      },
      getCount: function(){
        return count
      }
    }
  }
  
  let counter = makeCounter(5);
  counter.increase();
  console.log(counter.getCount());
  
  // PROTOTYPE
  
  function Hero (name){
    const hero = {
      name: name
    }
  
    hero.saludar = function(){
      console.log("hola soy " + this.name);
    };
  
    return hero;
  }
  
  const zelda = Hero("Zelda");
  zelda.saludar();


// CALLBACK

function sum(num1, num2){
  return num1 + num2;
}

function calc(num1, num2, callback){
  return callback(num1, num2)
}

console.log(calc(3,4, sum));

function name(name){
  return name
}

function sayName(name, callback){
  return callback(console.log("Hola me llamo "+name));
}

//console.log(sayName("David",name));

// ASYNC AWAIT WITH PROMISES

function prueba(){
  return console.log("prueba");
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve(
        sayName("David", name)
      ), 3000)
    } else {
      reject("Dont Work")
    }
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  //console.log(hello);
}

helloAsync()
  .catch(err => console.log(err));

  prueba();

/////////////////////////////////////////// ABAJO
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

const getCities = ()=>{
  return new Promise((resolve, reject) =>{
    setTimeout (()=> resolve(cities), 2000)
  })
};

const getUsers = ()=>{
  return new Promise((resolve, reject) =>{
    setTimeout (()=> resolve(users), 1000)
  })
};

async function getInfo(){
  const cities = await getCities();
  const users = await getUsers();
  console.log("Cities=> ", cities);
  console.log("Users=> ", users);
}

getInfo();

Promise.allSettled([getCities(), getUsers()])
  .then(values => {
    for (let i = 0; i < values.length; i++) {
      const element = values[i].status;
      console.log(element);
    }
    // console.log(values[0].status);
    // console.log(values[1].status);

  })
////////////////////////////////////////////// ARRIBA
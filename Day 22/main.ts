
// Q 139:

// List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers 
//(e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.

let count = 6 ;

if (count > 0) {
    console.log("Count is greater than 0 ") ;
}
function add (a : any  , b : any ) {
    return a + b ;
}
// let , function , return are reserved words.

//........................................................................................................................

// Q 140:

// Explain the error that occurs when trying to use a reserved word as a variable name.
// Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript. 
//This is because reserved words have predefined meanings and uses in the language syntax.

// << ............................  Attempting to use a reserved word as a variable name .................................... >>
// << ............................  let if = 6 ; // This line would cause a syntax error .....................................>>

console.log("Using a reserved word as a variable name cause a syntax error in javaScript.") ;

//................................................................................................................................

// Q 141:

// Discuss the significance of the await reserved word in asynchronous JavaScript.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. 
//Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to 
//understand and debug.

async function fetchData () {
    const data = await fetchSomething() ;
    console.log(data);
}

console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion");

function fetchSomething() {
    throw new Error("Function not implemented.");
}

//..............................................................................................................................

// Q 142:

// Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending,
// fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time 
//to complete, like fetching data or timing events.

const helloPromise = new Promise <string> ((resolve) => {
    setTimeout(() => {
        resolve("Hello , World!") ;
    } , 5000) ; // it takes 5 sec.
}) ;
helloPromise.then((message) => console.log(message)) ;

//.............................................................................................................................

// Q 143: 

//Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when
// a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.

const conditionalPromise = new Promise <string> ((resolve , reject) => {
    const success = Math.random() > 0.5 ; 
    if (success) {
        resolve("Success!") ; 
    } 
    else {
        reject(new Error("Failure")) ;
    }
}) ; 
conditionalPromise.then((result) => console.log(result)) .catch((Error) => console.log(Error.message)) ;

//............................................................................................................................

// Q 144: 

//Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when 
//all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of
// the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.

const promise1 = Promise.resolve(3) ; 
const promise2 = 42 ;
const promise3 = new Promise <string> ((resolve) => {
    setTimeout(resolve , 100 , "foo") ;
}) ;
Promise.all([promise1 , promise2 , promise3]) .then((values) => {
    console.log(values) ;
}) ;

//............................................................................................................................................

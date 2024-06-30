// Q 139:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers 
//(e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
var count = 6;
if (count > 0) {
    console.log("Count is greater than 0 ");
}
function add(a, b) {
    return a + b;
}
// let , function , return are reserved words.
//........................................................................................................................
// Q 140:
// Explain the error that occurs when trying to use a reserved word as a variable name.
// Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript. 
//This is because reserved words have predefined meanings and uses in the language syntax.
// << ............................  Attempting to use a reserved word as a variable name .................................... >>
// << ............................  let if = 6 ; // This line would cause a syntax error .....................................>>
console.log("Using a reserved word as a variable name cause a syntax error in javaScript.");
//................................................................................................................................
// Q 141:
// Discuss the significance of the await reserved word in asynchronous JavaScript.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. 
//Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to 
//understand and debug.
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchSomething()];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
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
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello , World!");
    }, 5000); // it takes 5 sec.
});
helloPromise.then(function (message) { return console.log(message); });
//.............................................................................................................................
// Q 143: 
//Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when
// a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise.then(function (result) { return console.log(result); }).catch(function (Error) { return console.log(Error.message); });
//............................................................................................................................
// Q 144: 
//Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when 
//all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of
// the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});

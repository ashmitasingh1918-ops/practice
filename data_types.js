// === Primitive Types ===

// 1. Number
let age = 21;
console.log("Value:", age, "| Type:", typeof age);

// 2. String
let project = "HireSphere";
console.log("Value:", project, "| Type:", typeof project);

// 3. Boolean
let isGraduated = false;
console.log("Value:", isGraduated, "| Type:", typeof isGraduated);

// 4. Undefined (Declared but not assigned)
let futureJob;
console.log("Value:", futureJob, "| Type:", typeof futureJob);

// 5. Null (Intentional empty value)
let dentalEmergency = null;
console.log("Value:", dentalEmergency, "| Type:", typeof dentalEmergency);

// === VERY IMPORTANT TEST: typeof null ===
// Observe: It returns "object". This is a famous bug in JavaScript 
// that was never fixed to avoid breaking the internet!
console.log("The Null Mystery:", typeof null); 

// 6. BigInt (For very large integers)
let bigNum = 9007199254740991n;
console.log("Value:", bigNum, "| Type:", typeof bigNum);

// 7. Symbol (Unique identifiers)
let id = Symbol("id");
console.log("Value:", "Symbol()", "| Type:", typeof id);


// === Non-Primitive Types ===

// 8. Object
let studentProfile = {
    name: "Ashmita",
    cgpa: 7.56
};
console.log("Value:", studentProfile, "| Type:", typeof studentProfile);

// 9. Array
let techStack = ["C++", "Java", "JavaScript"];
console.log("Value:", techStack, "| Type:", typeof techStack); 
// Note: typeof array is also "object" in JS!
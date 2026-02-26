// === var example ===
// Can var be redeclared? YES.
var user = "Ashmita";
var user = "Ashmita_Dev"; 
console.log("var redeclare:", user); // Works without error

// === let example ===
// Can let be redeclared? NO.
let score = 7.56;
// let score = 8.0; // ❌ SyntaxError: Identifier 'score' has already been declared
console.log("let initial:", score);

// === const example ===
// Can const be reassigned? NO.
const birthYear = 2005;
console.log("const value:", birthYear);

// === reassignment test ===
user = "Updated_Var";  // ✅ Allowed
score = 8.13;          // ✅ Allowed
console.log("Reassigned let:", score);

// --- Error case for const reassignment ---
try {
    birthYear = 2026; 
} catch (err) {
    console.log("Error for const reassignment:", err.message); 
    // Output: Assignment to constant variable.
}

// === block scope test ===
// Which works outside {} block? ONLY var.
{
    var branch = "CSE";
    let university = "K.R. Mangalam";
    const status = "Student";
    
    console.log("Inside block:", branch, university, status);
}

console.log("Outside block (var):", branch); // ✅ Prints "CSE"
try {
    console.log(university); 
} catch (err) {
    console.log("Outside block (let): ERROR - university is not defined");
}
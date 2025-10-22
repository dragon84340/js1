// 1. Foydalanuvchidan ism va yoshni olish
let name = prompt("Ismingizni kiriting:");
let age = +prompt("Yoshingizni kiriting:");

// 2. Misollar va javoblar
let examples = [
    { num1: 6, num2: 3, operator: "+", correct: 6 + 3 },
    { num1: 10, num2: 4, operator: "-", correct: 10 - 4 },
    { num1: 5, num2: 2, operator: "*", correct: 5 * 2 },
    { num1: 20, num2: 5, operator: "/", correct: 20 / 5 },
    { num1: 17, num2: 5, operator: "%", correct: 17 % 5 }
];

console.log(`Foydalanuvchi: ${name}, Yoshi: ${age}`);
console.log("------ Misollar va javoblar ------");

// 3. Har bir misol uchun foydalanuvchidan javob olish va chiqarish
examples.forEach(example => {
    let userAnswer = prompt(`${example.num1} ${example.operator} ${example.num2} = ?`);
    console.log(`${example.num1} ${example.operator} ${example.num2} = ${example.correct} (Sizning javobingiz: ${userAnswer})`);
});

// 4. Yakuniy alert
alert("Barcha misollar tugadi! Iltimos, natijalarni ko‘rish uchun konsolga qarang.");

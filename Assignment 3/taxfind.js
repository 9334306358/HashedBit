function findTax(salary) {
    let taxRate;
    let taxAmount;

    
    switch (true) {
        case salary > 1500000:
            taxRate = 0.3; 
            break;
        case salary > 1000000:
            taxRate = 0.2; 
            break;
        case salary > 500000:
            taxRate = 0.1; 
            break;
        default:
            taxRate = 0; 
    }

    
    taxAmount = salary * taxRate;

    return taxAmount;
}


const salary1 = 400000; 
const tax1 = findTax(salary1);
console.log(`Tax amount for a salary of $${salary1}: $${tax1.toFixed(2)}`);

const salary2 = 1200000; 
const tax2 = findTax(salary2);
console.log(`Tax amount for a salary of $${salary2}: $${tax2.toFixed(2)}`);

function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operation:', operation);
            return; 
    }
    console.log(`Result of ${num1} ${operation} ${num2} is: ${result}`);
}
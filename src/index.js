function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
   
   
    expr = 'return ' + expr;
    let a = new Function(expr);
    let b = a();
    if (b == Infinity) {
        throw 'TypeError: Division by zero.'
    }
    else {
        return b
    }

}

module.exports = {
    expressionCalculator
}



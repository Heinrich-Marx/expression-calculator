function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
   
   try {
    expr = 'return ' + expr;
    let a = new Function(expr);
    return a()
   }
   catch (error) {
       return error
   }

}

module.exports = {
    expressionCalculator
}



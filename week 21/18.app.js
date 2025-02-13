//REST                                                                                                    
function sum(...args) {
    return args.reduce( (sum,el) => sum + el );
}
console.log(sum(2,4,5,9));

function min(...args) {
    return args.reduce((min,el) => {
        if (min > el) {
            return el;
        }
        else {
            return min;
        }
    });
};
console.log(min(45,345,67,92));
class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            delimiter = numbers[2];
            numbers = numbers.substring(4); // Remove the delimiter declaration part
        }

        // Split the input by the specified delimiter, new lines, or comma
        let numArray = numbers.split(new RegExp("[,\n" + delimiter + "]"));
        let sum = 0;
        let negatives = [];

        numArray.forEach(num => {
            if (num !== "") {
                let n = parseInt(num);
                if (n < 0) {
                    negatives.push(n);
                }
                sum += n;
            }
        });

        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: " + negatives.join(", "));
        }

        return sum;
    }
}

// Test cases
const calculator = new StringCalculator();
console.log(calculator.add(""));         // Expected output: 0
console.log(calculator.add("1"));        // Expected output: 1
console.log(calculator.add("1,5"));      // Expected output: 6
console.log(calculator.add("1\n2,3"));   // Expected output: 6
console.log(calculator.add("//;\n1;2")); // Expected output: 3
console.log(calculator.add("//|\n1|2")); // Expected output: 3

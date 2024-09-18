let scores = [97, 83, 21, 52, 70, 90];

// Loop through each score
for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;

    // Determine grade using if statements
    if (score > 80) {
        grade = 'A';
    } else if (score > 70) {
        grade = 'B';
    } else if (score > 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    // Switch statement to print the result
    switch (grade) {
        case 'A':
            console.log(`Score: ${score}, Grade: A`);
            break;
        case 'B':
            console.log(`Score: ${score}, Grade: B`);
            break;
        case 'C':
            console.log(`Score: ${score}, Grade: C`);
            break;
        case 'F':
            console.log(`Score: ${score}, Grade: F`);
            break;
    }
}

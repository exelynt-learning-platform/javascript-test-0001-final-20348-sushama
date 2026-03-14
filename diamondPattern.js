// diamondPattern.js

// Number of rows in the top half of the diamond
const DIAMOND_SIZE = 5;

/**
 * Generates and prints a single line of the hollow diamond
 * @param {number} spaces - Number of leading spaces
 * @param {number} stars - Total characters in the line (1 for single star, or hollow)
 */
function generateLine(spaces, stars) {
    let line = '';

    // Add leading spaces
    for (let i = 0; i < spaces; i++) {
        line += ' ';
    }

    // Add stars and hollow spaces
    for (let i = 1; i <= stars; i++) {
        if (i === 1 || i === stars) {
            line += '*'; // First and last character in line is a star
        } else {
            line += ' '; // Hollow space inside
        }
    }

    console.log(line);
}

// Generate top half of the diamond (including middle line)
for (let i = 1; i <= DIAMOND_SIZE; i++) {
    generateLine(DIAMOND_SIZE - i, 2 * i - 1);
}

// Generate bottom half of the diamond
for (let i = DIAMOND_SIZE - 1; i >= 1; i--) {
    generateLine(DIAMOND_SIZE - i, 2 * i - 1);
}

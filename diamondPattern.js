let n = 5; // number of rows in top half

// Top half
for (let i = 1; i <= n; i++) {
    let line = '';
    
    // spaces
    for (let j = i; j < n; j++) {
        line += ' ';
    }

    // stars and hollow spaces
    for (let j = 1; j <= (2*i - 1); j++) {
        if (j === 1 || j === (2*i - 1)) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

// Bottom half
for (let i = n-1; i >= 1; i--) {
    let line = '';
    
    // spaces
    for (let j = n; j > i; j--) {
        line += ' ';
    }

    // stars and hollow spaces
    for (let j = 1; j <= (2*i - 1); j++) {
        if (j === 1 || j === (2*i - 1)) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

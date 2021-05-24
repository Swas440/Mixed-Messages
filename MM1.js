// console.log("This is just the start"); 

const quoteStart = ['You should', 'You can', 'You should not'];

const quoteMid = ['do anything you want', 'decide whats important', 'think introspectively']; 

const quoteEnd = ['now go do it', 'the future starts now', 'do your best'];

let q1 = quoteStart[Math.floor(Math.random() * quoteStart.length)];

let q2 = quoteMid[Math.floor(Math.random() * quoteMid.length)];

let q3 = quoteEnd[Math.floor(Math.random() * quoteEnd.length)];

//const quote = () => {}

console.log(q1 + ' ' + q2 + ' ' + q3);
import myCollection from "./collection.js";

function describeItem(item){
  let count=[];
  if (item.count === 1) {
    console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`);
  } else if (item.count > 1) {
    console.log(`I have ${item.count} ${item.name}'s`);
  } else {
    console.log();
  }
} 
function describeCollection(collection){
  collection.forEach(describeItem);
  }
  describeCollection(myCollection);

import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));
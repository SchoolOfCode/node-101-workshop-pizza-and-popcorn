import myCollection from "./collection.js";

function describeItem(item){
  let count=[];
  if (item.count === 1) {
    console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`);
  } else if (item.count > 1) {
    console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}'s`);
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
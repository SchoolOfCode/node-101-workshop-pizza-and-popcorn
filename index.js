let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

console.log(myCollection);

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
describeItem(myCollection);
function describeCollection(collection){
collection.forEach(describeItem);
}

 describeCollection(myCollection);

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

function describeItem(item) {
  let count;
  if (count === 1) {
    console.log(`I have a ${name}. Here's what I like about it: ${whatILike}`);
  } else if (count > 1) {
    console.log(`I have ${count} ${name}'s`);
  } else {
    console.log();
  }
}
// myCollection.forEach(describeItem)
describeItem(myCollection[0]);
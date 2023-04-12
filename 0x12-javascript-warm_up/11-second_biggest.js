#!/usr/bin/node
// searches the second biggest integer in the list of arguments.

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const listsArgs = process.argv.sort();
  console.log(listArgs.reverse()[1]);
}

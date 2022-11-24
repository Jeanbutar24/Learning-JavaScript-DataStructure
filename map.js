const data = new Map();

data.set("Jean", "62878-6970-4575");
data.set("Jane", "62878-6970-4576");
data.set("Jeane", "62878-6970-4577");

// console.log(data.get("Jane"));
// console.log(data.size);

for (let [key, value] of data) {
  console.log(`${key} = ${value}`);
}

// const data2 = [1, 2, 3, 4, 5];
// const data3 = {
//   satu: 1,
//   dua: 2,
//   tiga: 3,
// };
// for (let i in data3) {
//   console.log(`${i} = ${data3[i]}`);
// }
class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}

const arr = [1, 2, 3, 4];
const deleteArr = arr.splice(1, 1);

console.log(arr);

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleItems(items) {
  const doubledItems = items.map((item) => {
    return {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };
  });
  return doubledItems;
}

const doubledItems = doubleItems(itemsObject);
console.log(doubledItems);

function filterItems(items) {
  const filteredItems = items.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
  return filteredItems;
}

// Example usage:
const filteredItems = filterItems(itemsObject);
console.log(filteredItems);

function calculateTotalValue(items) {
  const totalValue = items.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);
  return totalValue;
}

const totalValue = calculateTotalValue(itemsObject);
console.log(totalValue);

function cleanString(str) {
  const cleanStr = str
    .replace(/[^a-zA-Z \-]/g, "")
    .trim()
    .toLowerCase();
  const spaceStr = cleanStr.replace(/-+/g, " ");
  return spaceStr.replace(/\s+/g, " ");
}

// Example usage:
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const cleanedString = cleanString(string);
console.log(cleanedString);
console.log(cleanedString === expectedReturnString);

function mergeArrays(first, second) {
  const merged = [];

  first.forEach((obj) => {
    const match = second.find((o) => o.uuid === obj.uuid);
    merged.push({
      uuid: obj.uuid,
      role: match ? match.role || null : null,
      name: obj.name || null,
    });
  });

  second.forEach((obj) => {
    const match = merged.find((o) => o.uuid === obj.uuid);
    if (!match) {
      merged.push({
        uuid: obj.uuid,
        role: obj.role || null,
        name: obj.name || null,
      });
    }
  });

  return merged.sort((a, b) => a.uuid - b.uuid);
}

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const mergedArray = mergeArrays(first, second);
console.log(mergedArray);
console.log(
  JSON.stringify(mergedArray) === JSON.stringify(expectedReturnArray)
);

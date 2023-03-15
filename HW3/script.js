const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const h1 = document.createElement("h1");
h1.textContent = "Student Info";
document.body.appendChild(h1);

const table = document.createElement("table");

const thead = document.createElement("thead");
const trHead = document.createElement("tr");
tableInfo.tableHeader.forEach((headerText) => {
  const th = document.createElement("th");
  const text = document.createTextNode(headerText);
  th.appendChild(text);
  trHead.appendChild(th);
});
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement("tbody");
tableInfo.tableContent.forEach((rowData) => {
  const tr = document.createElement("tr");
  Object.values(rowData).forEach((cellData) => {
    const td = document.createElement("td");
    const text = document.createTextNode(cellData);
    td.appendChild(text);
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(tbody);

document.body.appendChild(table);

const h2 = document.createElement("h2");
h2.textContent = "Add Student";

const form = document.createElement("form");
form.id = "studentForm";

const nameLabel = document.createElement("label");
nameLabel.for = "studentName";
nameLabel.textContent = "Name:";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "studentName";
nameInput.name = "studentName";

const ageLabel = document.createElement("label");
ageLabel.for = "studentAge";
ageLabel.textContent = "Age:";

const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.id = "studentAge";
ageInput.name = "studentAge";
ageInput.min = 0;

const phoneLabel = document.createElement("label");
phoneLabel.for = "studentPhone";
phoneLabel.textContent = "Phone:";

const phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.id = "studentPhone";
phoneInput.name = "studentPhone";

const addressLabel = document.createElement("label");
addressLabel.for = "studentAddress";
addressLabel.textContent = "Address:";

const addressInput = document.createElement("input");
addressInput.type = "text";
addressInput.id = "studentAddress";
addressInput.name = "studentAddress";

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "Add";

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(ageLabel);
form.appendChild(ageInput);
form.appendChild(document.createElement("br"));
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(document.createElement("br"));
form.appendChild(addressLabel);
form.appendChild(addressInput);
form.appendChild(document.createElement("br"));
form.appendChild(addButton);

document.body.appendChild(h2);
document.body.appendChild(form);

const formInput = document.getElementById("studentForm");
console.log(formInput);
const nameData = document.getElementById("studentName");
const ageData = document.getElementById("studentAge");
const phoneData = document.getElementById("studentPhone");
const addressData = document.getElementById("studentAddress");

formInput.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  const nameValue = nameData.value;
  const ageValue = ageData.value;
  const phoneValue = phoneData.value;
  const addressValue = addressData.value;

  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = nameValue;
  newRow.appendChild(nameCell);
  const ageCell = document.createElement("td");
  ageCell.textContent = ageValue;
  newRow.appendChild(ageCell);
  const phoneCell = document.createElement("td");
  phoneCell.textContent = phoneValue;
  newRow.appendChild(phoneCell);
  const addressCell = document.createElement("td");
  addressCell.textContent = addressValue;
  newRow.appendChild(addressCell);

  const tableBody = document.querySelector("table tbody");
  tableBody.appendChild(newRow);

  nameData.value = "";
  ageData.value = "";
  phoneData.value = "";
  addressData.value = "";
});

const q2 = document.createElement("h1");
q2.textContent = "Ordered and Unordered List";
document.body.appendChild(q2);
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const ol = document.createElement("ol");

list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ol.appendChild(li);
});

const ul = document.createElement("ul");

list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

document.body.appendChild(ol);
document.body.appendChild(ul);

const q3 = document.createElement("h1");
q3.textContent = "DropDownList";
document.body.appendChild(q3);

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const select = document.createElement("select");

dropDownList.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.content;
  select.appendChild(option);
});

select.addEventListener("change", (event) => {
  console.log(event.target.value);
});

document.body.appendChild(select);

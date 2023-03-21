type Employee = Identity & Contact;

const employee: Employee = {
    id: "111",
    name: "Takuya",
    email: "test@example.com",
    phone: "012345678",
};

// const employeeContact: Employee = {
//     name: "Takuya",
//     email: "test@example.com",
//     phone: "012345678",
// };
// >型 '{ name: string; email: string; phone: string; }' を型 'Employee' に割り当てることはできません。
// >  プロパティ 'id' は型 '{ name: string; email: string; phone: string; }' にありませんが、型 'Identity' では必須です。

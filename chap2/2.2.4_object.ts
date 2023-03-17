const user: { name: string; age: number } = { name: "Takuya", age: 36 };
console.log(user.name);
console.log(user.age);

function printName(obj: { firstName: string; lastName?: string }) {
    //
}
printName({ firstName: "Takuya" });
printName({ firstName: "Takuya", lastName: "Tejima" });

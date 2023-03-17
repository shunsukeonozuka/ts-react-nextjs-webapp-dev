let user2: any = { firstName: "Takuya" };

user2.hello();
user2();
user2.age = 100;
user2 = "hello";
const n: number = user2;
// いずれもコンパイルエラーとならない

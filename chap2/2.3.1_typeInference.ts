const age = 10;
// console.log(age.length);
// >プロパティ 'length' は型 '10' に存在しません。

const user = {
    name: "Takuya",
    age: 36,
};
// console.log(user.age.length);
// >プロパティ 'length' は型 'number' に存在しません。

function getUser() {
    return {
        name: "Takuya",
        age: 36,
    };
}
const user2 = getUser();
// console.log(user.age.length);
// >プロパティ 'length' は型 'number' に存在しません。

const names = ["Takuya", "Yoshiki", "Taketo"];
names.forEach((name) => {
    // console.log(name.toUppercase());
    // >プロパティ 'toUppercase' は型 'string' に存在していません。'toUpperCase' ですか?
});

// window.confirm = () => {
// console.log("confirm関数");
// >型 'void' を型 'boolean' に割り当てることはできません。
// };

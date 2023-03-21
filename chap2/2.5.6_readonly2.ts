type User2 = {
    name: string;
    gender: string;
};

type User2Readonly = Readonly<User2>;

let user2: User2 = { name: "Takuya", gender: "Male" };
let user2Readonly: User2Readonly = { name: "Takuya", gender: "Male" };

user2.name = "Yoshiki";
// user2Readonly.name = "Yoshiki"; // 読み取り専用プロパティであるため、'name' に代入することはできません。

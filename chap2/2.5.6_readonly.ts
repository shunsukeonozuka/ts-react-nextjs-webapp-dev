type User = {
    readonly name: string;
    readonly gender: string;
};

let user: User = { name: "Takuya", gender: "Male" };

// user.gender = "Female"; // 読み取り専用プロパティであるため、'gender' に代入することはできません。

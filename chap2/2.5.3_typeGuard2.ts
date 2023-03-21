type User2 = {
    info?: {
        name: string;
        age: number;
    };
};

let response = {};
const user2 = response as any as User2;

if (user2.info) {
    console.log(user2.info.name);
}

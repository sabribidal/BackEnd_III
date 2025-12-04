export const generateMockUsers = (num = 50) => {
const users = [];
for (let i = 1; i <= num; i++) {
    users.push({
    id: i,
    name: `Usuario${i}`,
    email: `user${i}@mail.com`,
      age: Math.floor(Math.random() * 60) + 18
    });
}
return users;
};

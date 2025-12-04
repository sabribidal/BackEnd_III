export const generateFakeUser = () => ({
  name: `Usuario${Math.floor(Math.random() * 1000)}`,
  email: `user${Math.floor(Math.random() * 1000)}@mail.com`,
  age: Math.floor(Math.random() * 60) + 18
});

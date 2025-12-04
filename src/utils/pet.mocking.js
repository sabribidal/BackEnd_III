import { faker } from '@faker-js/faker';

export const generateMockPets = (num = 50) => {
const pets = [];
for (let i = 1; i <= num; i++) {
    pets.push({
    id: i,
    name: faker.animal.dog(),
    type: faker.animal.type(),
      age: Math.floor(Math.random() * 15) + 1
    });
}
return pets;
};

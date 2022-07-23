import { connect, disconnect } from "../database/database";



(async () => {
  const db = connect();

  // test static methods
  const twenties = await db.UserModel.findByAge(31, 34);
  const newUser = await db.UserModel.findOneOrCreate({
    firstName: "Mark",
    lastName: "Perov",
    userId: 31,
  });
  const existingUser = await db.UserModel.findOneOrCreate({
    firstName: "John",
    lastName: "Doe",
    userId: 34,
  });
  const numOfUsers = (await db.UserModel.find()).length;
  console.log({ twenties, newUser, existingUser, numOfUsers });

  // test instance methods
  await existingUser.setLastUpdated();
  const siblings = await existingUser.sameLastName();
  console.log({ siblings });

  disconnect();
})();



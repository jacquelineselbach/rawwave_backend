import { UserModel } from "../database/models/users.model";
import { connect, disconnect } from "../database/database";

(async () => {
  connect();

  const users = [
    { firstName: "Jacqueline", lastName: "Selbach", age: 27 },
    { firstName: "Mark", lastName: "Perov", age: 31 }
  ];

  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`);
    }

    disconnect();
  } catch (e) {
    console.log(e);
  }
})();

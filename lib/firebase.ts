import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid";

const writeContacts = (inputsValue, app) => {
  const database = getDatabase(app);
  console.log({ inputsValue });

  set(ref(database, "contacts/" + nanoid()), inputsValue);

  return;
};

export default writeContacts;

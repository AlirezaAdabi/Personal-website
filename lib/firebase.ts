import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid";

const writeContacts = async (inputsValue, app) => {
  const database = getDatabase(app);

  await set(ref(database, "contacts/" + nanoid()), inputsValue);

  return;
};

export default writeContacts;

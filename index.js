import dotenv from 'dotenv'
import { IgApiClient } from "instagram-private-api";

dotenv.config()

const username = process.env.username
const password = process.env.password

const ig = new IgApiClient();
// You must generate device id's before login.
// Id's generated based on seed
// So if you pass the same value as first argument - the same id's are generated every time
(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(username);
  // ig.state.proxyUrl = process.env.IG_PROXY;
  const auth = await ig.account.login(username, password);
  const user = await ig.user.getIdByUsername("thug_life_nepal_oficial");
  const data = await ig.user.info(user);
  console.log({
    username: data.username,
    email: data.public_email,
  });
})();

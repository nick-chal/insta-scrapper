import { IgApiClient } from "instagram-private-api";
import { sample } from "lodash";
const ig = new IgApiClient();
// You must generate device id's before login.
// Id's generated based on seed
// So if you pass the same value as first argument - the same id's are generated every time
(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice("wasas.mar");
  // ig.state.proxyUrl = process.env.IG_PROXY;
  const auth = await ig.account.login("wasas.mar", "testpw123");
  const user = await ig.user.getIdByUsername("thug_life_nepal_oficial");
  const data = await ig.user.info(user);
  console.log({
    username: data.username,
    email: data.public_email,
  });
})();

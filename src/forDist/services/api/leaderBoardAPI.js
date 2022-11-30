import { getApi } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function getLeaderBoardApi() {
  return await getApi(APIROUTES.leaderBoard);
}

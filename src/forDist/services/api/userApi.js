import { getApiNoAuth } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function getUserApi(idUser) {
  return await getApiNoAuth(`${APIROUTES.user}${idUser}`);
}

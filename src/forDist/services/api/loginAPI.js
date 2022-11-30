import { postApiNoAuth } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function signinApi(obj) {
  return await postApiNoAuth(APIROUTES.login, obj);
}

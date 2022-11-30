import { postApiNoAuth } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function registrationApi(obj) {
  return await postApiNoAuth(APIROUTES.registration, obj);
}

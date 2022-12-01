import { postApi } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function createLobby() {
  return await postApi(APIROUTES.lobby);
}

export async function putLobby(idLobby) {
  return await postApi(`${APIROUTES.lobby}/${idLobby}`);
}

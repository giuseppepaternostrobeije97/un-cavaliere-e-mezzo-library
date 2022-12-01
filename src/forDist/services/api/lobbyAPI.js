import {
  putApi,
  postApi,
  deleteApi,
} from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";
import APIROUTES from "./apiRoutes";

export async function createLobby() {
  return await postApi(APIROUTES.lobby);
}

export async function putLobby(idLobby) {
  return await putApi(`${APIROUTES.lobby}/${idLobby}`);
}

export async function deleteLobbyApi() {
  return await deleteApi(`${APIROUTES.lobby}`);
}

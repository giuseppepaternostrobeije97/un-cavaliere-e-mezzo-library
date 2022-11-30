import { postApiNoAuth } from "generic-services-un-cavaliere-e-mezzo/dist/services/genericServices";

export async function updateAuthTokenApi() {
  return await postApiNoAuth("updateAuthToken", {
    refreshToken: localStorage.getItem("onlusRefreshToken"),
  });
}

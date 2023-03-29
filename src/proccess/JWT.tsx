import { getUserJwt } from "../api/fetchUser";
import jwtDecode from "jwt-decode";

const getJwtLogin = async (data: any) => {
  try {
    const jwt = await getUserJwt(data);
    localStorage.setItem("jwt", jwt);
  } catch (error) {
    console.error("Error getting JWT:", error);
  }
};

const getStoreJwt = () => {
  const storedJwt = localStorage.getItem("jwt");
  return storedJwt;
};

const checkJWTValidity = (token: any) => {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    // Vérifiez si le token a expiré.
    if (decoded.exp && decoded.exp < currentTime) {
      console.error("JWT has expired");
      return false;
    }
    // Le JWT n'a pas expiré, mais la signature n'a pas été vérifiée.
    return true;
  } catch (error) {
    // Le JWT n'est pas valide.
    return false;
  }
};
// Utilisez cette fonction pour vérifier la validité de votre JWT stocké
const isValid = checkJWTValidity(getStoreJwt());


export { getJwtLogin, getStoreJwt, isValid };

import fs from "fs";
import fetch from "node-fetch";
import urlcat from "urlcat";
import { TokenResponse } from "./types";
import path from "path";

const PATH = path.join(process.cwd(), "tokens.json");

export const getToken = (type: "access_token" | "refresh_token") => {
  console.log('getToken', type);
  const data = JSON.parse(fs.readFileSync(PATH, "utf8"));

  return data[type] as string;
};

export const setToken = (
  type: "access_token" | "refresh_token",
  token: string
) => {
  console.log('setToken', type);
  const data = JSON.parse(fs.readFileSync(PATH, "utf8"));

  data[type] = token;

  fs.writeFileSync(PATH, JSON.stringify(data, null, 4));
};

export const setTokenData = (data: TokenResponse) => {
  console.log('setTokenData', data);
  fs.writeFileSync(
    PATH,
    JSON.stringify(
      {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      },
      null,
      4
    )
  );
};

export const refreshToken = async () => {
  const data = JSON.parse(fs.readFileSync(PATH, "utf8"));

  const refreshToken = data["refresh_token"] as string;

  const url = urlcat(
    "https://id.forte.kz/auth/realms/mainRealm/protocol/openid-connect/token",
    {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: 'mibWeb',
    }
  );

  console.log(url);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((value) => {
      console.log("refreshToken", value);
      const data = value as TokenResponse;

      setTokenData(data);

      return data;
    });
};

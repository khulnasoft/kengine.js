import axios from "axios";
import chalk from "chalk";
import { hideBin } from "yargs/helpers";
import spinner from "../../services/spinner/index";
require("dotenv").config();
import http from "http";
const argv = hideBin(process.argv);

const getDomainWithoutSubdomain = (url: string) => {
  const urlParts = new URL(url).hostname.split(".");

  return urlParts
    .slice(0)
    .slice(-(urlParts.length === 4 ? 3 : 2))
    .join(".");
};

function getBaseUrl(): string {
  const { KENGINE_DOMAIN = "khulnasoft.com" } = process.env;
  const index = argv.findIndex((val) => val === "--endpoint");
  if (index > -1) {
    const endpoint = argv[index + 1];
    return endpoint;
  }
  return `https://go.${KENGINE_DOMAIN}/v1/`;
}

export function getTuxUrl(): string {
  const { KENGINE_DOMAIN = "khulnasoft.com" } = process.env;
  const index = argv.findIndex((val) => val === "--endpoint");
  if (index > -1) {
    const endpoint = argv[index + 1];
    const domain = getDomainWithoutSubdomain(endpoint);
    return `https://tux.${domain}`;
  }
  return `https://tux.${KENGINE_DOMAIN}`;
}

export function getDataUrl(): string {
  const { KENGINE_DOMAIN = "khulnasoft.com" } = process.env;
  const index = argv.findIndex((val) => val === "--endpoint");
  if (index > -1) {
    const endpoint = argv[index + 1];
    const domain = getDomainWithoutSubdomain(endpoint);
    return `https://data.${domain}`;
  }
  return `https://data.${KENGINE_DOMAIN}`;
}

export const client = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const s = spinner.get();
    s.fail();
    const response = error.response?.data;
    const message = response ? `${response.status || "Error"} - ${response.message}` : error.message;
    console.log(`${chalk.red(chalk.bold(message))}`);
    throw error;
  },
);

publicClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if ((error.request as http.ClientRequest).path.includes("/auth/api-key")) return;
    const s = spinner.get();
    s.fail();
    console.log(`${chalk.red(chalk.bold(error))}`);
    throw error;
  },
);

export function setAxiosAuth(apiKey: string) {
  client.interceptors.request.use(function (config) {
    if (!apiKey) {
      throw Error(`Unable to locate credentials. You can configure credentials by running "kengine auth"`);
    }
    if (!config.headers) return config;
    config.headers["x-api-key"] = apiKey || "";
    return config;
  });
}

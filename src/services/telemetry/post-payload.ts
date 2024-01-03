import axios from "axios";
require("dotenv").config();

export async function postPayload(payload: Record<string, any>) {
  try {
    const { KENGINE_DOMAIN = "kengine.khulnasoft.com" } = process.env;
    const endpoint = `https://telemetry.${KENGINE_DOMAIN}/v1/cli`;
    await axios.post(endpoint, [payload]);
  } catch (_) {}
}

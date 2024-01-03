import chalk from "chalk";
import { APIKey, Environment, Workspace } from "../../../services/api/paths/auth";
import { OutputFormat, tableChars } from "../../../shared";
import Table from "cli-table3";
import { getAuthProfilePath } from "../../../services/auth";

const { KENGINE_DOMAIN = "kengine.khulnasoft.com" } = process.env;

export function welcome() {
  console.log(`${chalk.greenBright("Welcome to Kengine")}\n`);
  console.log(
    `${chalk.grey(
      "By using the Kengine terminal you agree with our terms (https://kengine.khulnasoft.com/terms) and our privacy policy (https://kengine.khulnasoft.com/privacy)",
    )}\n`,
  );
}

export function userConfigFound(profile: string) {
  console.log(
    `You're already authenticated as ${chalk.cyan(profile)}
Run ${chalk.greenBright("kengine login --profile <new_kengine_profile_name>")} to create a new profile`,
  );
}

export function credentialsConfigured(path: string) {
  console.log(`✨ You're now logged in! Your API Key is written to ${chalk.cyan(path)}`);
  console.log(`
Next steps:
Run ${chalk.greenBright("kengine query")} to query your telemetry data`);
  process.exit(0);
}

export function iam(profile: string, key: APIKey, workspace: Workspace, environment: Environment, apiKey: string, format: OutputFormat) {
  const path = getAuthProfilePath(profile);
  if (format === "json") {
    console.log(JSON.stringify({ key, workspace, environment, path }, null, 4));
    return;
  }
  const table = new Table({
    chars: tableChars,
  });

  table.push(["Workspace", `${workspace.id}`]);
  table.push(["Environment", `${environment.id}`]);
  table.push(["User ID", key.userId]);
  table.push(["API Key", apiKey]);
  table.push(["Path", path]);
  table.push(["Domain", KENGINE_DOMAIN]);

  console.log(table.toString());
}

import { Arguments, CommandBuilder } from "yargs";
import { baseOptions, BaseOptions, printError } from "../shared";
import { execSync } from "child_process";
import { getLatestVersion } from "../services/api/paths/cli";
import spinner from "../services/spinner";
const packageJson = require("../../package.json");

const { KENGINE_DOMAIN = "khulnasoft.com" } = process.env;

export const command = "upgrade";
export const desc = "Upgrade the Kengine CLI to the latest version";

export const builder: CommandBuilder<BaseOptions, BaseOptions> = (yargs) => {
  return yargs
    .options({
      ...baseOptions,
    })
    .example([
      [
        `
      # Upgrade:
      $0 upgrade
      `,
      ],
    ])
    .fail((message, err, yargs) => {
      printError(message, err, yargs);
    });
};

export async function handler(argv: Arguments<BaseOptions>) {
  spinner.init(!!argv.quiet);

  const { version: latestVersion } = await getLatestVersion();
  const { version } = packageJson;
  if (version === latestVersion) {
    return console.log(`You're currently using the latest version of the Kengine CLI: v${latestVersion}`);
  }
  const res = execSync(`curl -s https://get.${KENGINE_DOMAIN} | sh`);
  console.log(res.toString());
  console.log(`Upgraded to v${latestVersion}`);
}

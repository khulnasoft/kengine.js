import { Arguments, CommandBuilder } from "yargs";
import spinner from "../services/spinner";
import { baseOptions, BaseOptions, printError } from "../shared";
import * as open from "open";

export interface Options extends BaseOptions {}

export const command = "console";
export const desc = "Open the kengine web console";

export const builder: CommandBuilder<Options, Options> = (yargs) => {
  return yargs
    .options({
      ...baseOptions,
    })
    .example([
      [
        `
      # Open the Kengine webconsole with the CLI
      kengine console
      `,
      ],
    ])
    .fail((message, err, yargs) => {
      printError(message, err, yargs);
    });
};

export async function handler(argv: Arguments<Options>) {
  const s = spinner.init(!!argv.quiet);

  let { endpoint } = argv;

  const { KENGINE_DOMAIN = "kengine.khulnasoft.com" } = process.env;

  const loginUrl = `https://console.${endpoint || KENGINE_DOMAIN}`;
  await open.default(loginUrl);
}

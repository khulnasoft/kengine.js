import chalk from "chalk";
import { CommandBuilder } from "yargs";
import { disable } from "../../services/telemetry/telemetry";
import { printError } from "../../shared";

export const command = "disable";
export const desc = "Disable Kengine telemetry collection";

export const builder: CommandBuilder = (yargs) => {
  return yargs
    .example([
      [
        `
      # Disable Kengine telemetry collection:
      $0 telemetry disable
      `,
      ],
    ])
    .fail((message, err, yargs) => {
      printError(message, err, yargs);
    });
};

export async function handler() {
  disable();
  console.log("\nStatus:", chalk.bold(chalk.red("Disabled")), "\n");
  console.log("You have opted out of Kengine's anonymous telemetry program.");
  console.log("No data will be collected from your machine.\n");
}

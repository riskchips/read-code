const scan = require("./scan");
const query = require("./query");
const explain = require("./explain");

const command =
    process.argv[2];

switch (command) {
    case "scan":
        scan(
            process.argv.slice(3)
        );
        break;

    case "query":
        query(
            process.argv
                .slice(3)
                .join(" ")
        );
        break;

    case "explain":
        explain();
        break;

    case "--help":
    case "help":
        console.log(`
read-code

Commands:
  read-code scan
  read-code query "<question>"
  read-code explain

Scan Flags:
  --savefile <path>
  --compact
  --exclude <folders>

Examples:

  read-code scan

  read-code scan --savefile project.json

  read-code scan --compact

  read-code scan --exclude tests,docs

  read-code scan --savefile project.json --compact

  read-code scan --exclude tests,docs --compact --savefile output.json

  read-code query "what frameworks are used"

  read-code query "show architecture"

  read-code explain
`);
        break;

    default:
        console.log(`
read-code

Commands:
  read-code scan
  read-code query "<question>"
  read-code explain

Use:
  read-code --help
`);
}
import { products } from "./demoData.js";
import { select } from "@inquirer/prompts";
import { clear } from "./units/terminal.js";
import { Choice } from "./interfaces/interfaces.js";
import { qs1 } from "./modules/qs1.module.js";
import { qs2 } from "./modules/qs2.module.js";
import { qs3 } from "./modules/qs3.module.js";
import { qs4 } from "./modules/qs4.module.js";
import { qs5 } from "./modules/qs5.module.js";
import { qs6 } from "./modules/qs6.module.js";
import { qs7 } from "./modules/qs7.module.js";
import { qs8 } from "./modules/qs8.module.js";
import { qs9 } from "./modules/qs9.module.js";

const qsList: Choice[] = [
    { name: "Question 1", value: "qs1" },
    { name: "Question 2", value: "qs2" },
    { name: "Question 3", value: "qs3" },
    { name: "Question 4", value: "qs4" },
    { name: "Question 5", value: "qs5" },
    { name: "Question 6", value: "qs6" },
    { name: "Question 7", value: "qs7" },
    { name: "Question 8", value: "qs8" },
    { name: "Question 9", value: "qs9" }
]

async function main() {
    clear();
    const question = await select({
        message: "Choose a question:",
        choices: [
            ...qsList,
            { name: "10. Exit", value: "exit" }
        ]
    });;
    switch (question) {
        case 'qs1': {
            await qs1(products);
            main();
            break;
        }
        case 'qs2': {
            await qs2(products);
            main();
            break;
        };
        case 'qs3': {
            await qs3(products);
            main();
            break;
    }
        case 'qs4': {
            await qs4(products);
            main();
            break;
        }
        case 'qs5': {
            await qs5(products);
            main();
            break;
        }
        case 'qs6': {
            await qs6(products);
            main();
            break;
        }
        case 'qs7': {
            await qs7(products);
            main();
            break;
        }
        case 'qs8': {
            await qs8(products);
            main();
            break;
        }
        case 'qs9': {
            await qs9(products);
            main();
            break;
        }
        case 'exit': return;
    }
}

main();
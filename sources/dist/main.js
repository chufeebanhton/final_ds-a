"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demoData_js_1 = require("./demoData.js");
const prompts_1 = require("@inquirer/prompts");
const terminal_js_1 = require("./units/terminal.js");
const qs1_module_js_1 = require("./modules/qs1.module.js");
const qs2_module_js_1 = require("./modules/qs2.module.js");
const qs3_module_js_1 = require("./modules/qs3.module.js");
const qs4_module_js_1 = require("./modules/qs4.module.js");
const qs5_module_js_1 = require("./modules/qs5.module.js");
const qs6_module_js_1 = require("./modules/qs6.module.js");
const qs7_module_js_1 = require("./modules/qs7.module.js");
const qs8_module_js_1 = require("./modules/qs8.module.js");
const qs9_module_js_1 = require("./modules/qs9.module.js");
const qsList = [
    { name: "Question 1", value: "qs1" },
    { name: "Question 2", value: "qs2" },
    { name: "Question 3", value: "qs3" },
    { name: "Question 4", value: "qs4" },
    { name: "Question 5", value: "qs5" },
    { name: "Question 6", value: "qs6" },
    { name: "Question 7", value: "qs7" },
    { name: "Question 8", value: "qs8" },
    { name: "Question 9", value: "qs9" }
];
async function main() {
    (0, terminal_js_1.clear)();
    const question = await (0, prompts_1.select)({
        message: "Choose a question:",
        choices: [
            ...qsList,
            { name: "10. Exit", value: "exit" }
        ]
    });
    ;
    switch (question) {
        case 'qs1': {
            await (0, qs1_module_js_1.qs1)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs2':
            {
                await (0, qs2_module_js_1.qs2)(demoData_js_1.products);
                main();
                break;
            }
            ;
        case 'qs3': {
            await (0, qs3_module_js_1.qs3)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs4': {
            await (0, qs4_module_js_1.qs4)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs5': {
            await (0, qs5_module_js_1.qs5)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs6': {
            await (0, qs6_module_js_1.qs6)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs7': {
            await (0, qs7_module_js_1.qs7)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs8': {
            await (0, qs8_module_js_1.qs8)(demoData_js_1.products);
            main();
            break;
        }
        case 'qs9': {
            await (0, qs9_module_js_1.qs9)(demoData_js_1.products);
            main();
            break;
        }
        case 'exit': return;
    }
}
main();

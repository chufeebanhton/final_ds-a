import { input, select } from "@inquirer/prompts";
import { clear } from "node:console";

interface Output {
    type: string | number
}

export async function readline(message: string, type: Output = {type: 'number'}): Promise<string | number> {
    clear();
    let result = await input({
        message: message
    });
    if (type.type === 'number') {
        return (parseInt(result) === -1) ? readline(`${message} again`) : Number(result);
    } else {
        return result;
    }
}

export async function yesno(message?: string): Promise<boolean> {
    const yn = await select({
        message: message ?? '',
        choices: [
            { name: 'YES', value: true},
            { name: 'NO', value: false}
        ]
    });
    return yn;
}
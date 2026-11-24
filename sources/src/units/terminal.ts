import { stdout } from "node:process";

export function clear(): void {
    stdout.write("\x1Bc");
}
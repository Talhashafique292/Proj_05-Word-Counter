#!/usr/bin/env node
import inquirer from "inquirer";
function counter(paragraph) {
    let freeWhiteSpace = paragraph.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
;
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write paragraph here:    ",
            name: "paragraph",
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCount(counter);

import Readline from "readline"
import fs from "fs"

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const showMenu = () =>{
    console.log("choose a option")
    console.log("1: write file");
    console.log("2: Read file");
    console.log("3: append file");
    console.log("4: rename file");
    console.log("5: delete file");
    console.log("6: Exit");
    rl.question("choose an option: ", handletask)
    
}

const handletask=(option) =>{
    if (option === "1") {
        rl.question("Enter file name: ", (file1) => {
            rl.question("Enter content", (content1) => {
                fs.writeFile(`${file1}.txt`, content1, "utf-8", (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("created successfully")
                    }
                    showMenu();
                });
            });
        });
    }
    else if (option === "2"){
        rl.question("Enter file name: ", (file2) => {
                fs.readFile(`${file2}.txt`, "utf-8", (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(data)
                    }
                    showMenu();
                });
            });
    }
    else if (option === "3"){
        rl.question("Enter file name: ", (file3) => {
            rl.question("Enter content", (content3) => {
                fs.appendFile(`${file3}.txt`, content3, "utf-8", (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("append successfully")
                    }
                    showMenu();
                });
            });
        });
    }
    else if (option === "4"){
        rl.question("Enter file name: ", (file) => {
            rl.question("Enter another file name", (Newfile) => {
                fs.rename(`${file}.txt`,`${Newfile}.txt`, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("created successfully")
                    }
                    showMenu();
                });
            });
        });
    }
    else if (option === "5"){
        rl.question("Enter file name: ", (filename) => {
            const filepath = path.join(__dirname,filename)
            fs.unlink(`${filename}.txt`, err =>{
                console.log("delete successfully");
            })
            showMenu();
        });
    }
    else{
        rl.close();
    }
}
showMenu();

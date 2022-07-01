const list = [];
let key = "k";
while (key !== "quit") {
    key = prompt("What would you like to do?");
    if (key === "new") {
        let task = prompt("Enter the new task");
        list.push(task);
    }
    else if (key === "list") {
        console.log("********");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("********");
    }
    else if (key === "delete") {
        let position = parseInt(prompt("Which Index you want to delete?"));
        if (position < list.length && position >= 0) {
            list.splice(position, 1);
        }
        else {
            console.log("Not a valid index");
        }
    }
    else if (key === "quit") {
        console.log("You've exited the app.");
        break;
    }
    else {
        console.log("Enter a valid entry");
    }
}
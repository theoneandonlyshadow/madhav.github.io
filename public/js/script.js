const commands = ["stats", "help"];
const terminal = document.getElementsByClassName("terminal")[0];
const defaultPrompt = document.getElementsByClassName("prompt")[0];
const currentDate = new Date();

window.onload = () => {
    defaultPrompt.value = "";
}

/*window.onload = () => {
    // Get the ASCII art element
    const asciiArtElement = document.querySelector(".xterm");
  
    // Your ASCII art content
    const asciiArtContent = ("
      ██╗░░██╗████████╗███████╗██████╗░███╗░░░███╗
      ╚██╗██╔╝╚══██╔══╝██╔════╝██╔══██╗████╗░████║
      ░╚███╔╝░░░░██║░░░█████╗░░██████╔╝██╔████╔██║
      ░██╔██╗░░░░██║░░░██╔══╝░░██╔══██╗██║╚██╔╝██║
      ██╔╝╚██╗░░░██║░░░███████╗██║░░██║██║░╚═╝░██║
      ╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝
    ");
  
    // Set the content of the ASCII art element
    asciiArtElement.innerText = asciiArtContent;
  };
*/
const newLine = async (e) => {
    if (e.key === "Enter") {
        const promptArray = document.getElementsByClassName("prompt");
        const prompt = promptArray[promptArray.length - 1];
        const response = await parse(prompt.value);
        const pre = document.createElement("pre");
        if (response) {
            pre.classList.add("info");
            pre.innerHTML = response;
            const container = document.createElement("div");
            container.classList.add("response-container");
            container.appendChild(pre);
            const terminal = document.querySelector(".terminal");
            const prompts = document.querySelector(".prompts");
            terminal.insertBefore(container, prompts);
        }
        prompt.value = "";
        prompt.focus();
    }
}

const linting = (e) => {
    const promptArray = document.getElementsByClassName("prompt");
    const prompt = promptArray[promptArray.length - 1];
    const currentCommand = prompt.value;
    if (!currentCommand) return;
    if (commands.includes(currentCommand)) {
        prompt.style.color = "green";
    } else {
        prompt.style.color = "red";
    }
}

defaultPrompt.addEventListener("keypress", newLine);

const parse = async (command) => {
    const formattedDate = currentDate.toLocaleString();
    const hostnameoutput = "[ ng@3315 ~] >";
    if (!command) return undefined;
    switch (command) {
        case "help":
            return `${hostnameoutput} \nHelp: Displays list of commands`
        case "linkedin":
            return `${hostnameoutput} \nhttps://www.linkedin.com/in/madhav-nair-5310a6251/`
        case "outlook":
            return `${hostnameoutput} \nmadhavnair700@outlook.com`
        case "gmail":
            return `${hostnameoutput} \nmadhavnair700@gmail.com`
        case "kill":
            return `${hostnameoutput} \nexiting window in 5 seconds. Have a nice day.`
        case "whoami":
            return `${hostnameoutput} \nYou are a valued viewer! <3`
        case "echo":
            return `${hostnameoutput} \ncant echo just yet`
        case "date":
            return `${hostnameoutput} \n${formattedDate}`
        case "about":
            return window.location.href = '../about.html';
        case "contact":
            return window.location.href = '../contact.html'
        case "links":
            return window.location.href = '../links.html'
        case "posts":
            return window.location.href = '../posts.html'
        case "projects":
            return window.location.href = '../project.html'
        default:
            return `'${command.includes(" ") ? command.split(" ")[0] : command}' is not recognized as an internal or external command.`
    }
}

const xterm = document.getElementById("xterm");
const bymn = document.getElementById("bymn");
xterm.style.fontSize = "10px";
bymn.style.fontSize = "5px";
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
            return `${hostnameoutput} \nhelp -> Displays list of commands\n
linkedin -> displays Linkedin profile URL\n
outlook -> displays outlook addres & URL\n
gmail -> displays gmail address & URL\n
whoami -> who are you??\n
kill -> closes website\n
date -> displays current date and time\n
about -> redirect to about page\n
contact -> redirect to contact page\n
links -> redirect to links page\n
posts -> redirect to posts page\n
maxtac -> redirect to maxtac page\n
projects -> reidrect to projects page\n`
        case "linkedin":
            return `${hostnameoutput} \nhttps://www.linkedin.com/in/madhav-nair-5310a6251/`
        case "outlook":
            return `${hostnameoutput} \nmadhavnair700@outlook.com`
        case "gmail":
            return `${hostnameoutput} \nmadhavnair700@gmail.com`
        case "kill":
            return window.close()
        case "whoami":
            return `${hostnameoutput} \nYou are a valued viewer! <3`
        case "date":
            return `${hostnameoutput} \n${formattedDate}`
        case "about":
            return window.location.href = './public/about.html';
        case "contact":
            return window.location.href = './public/contact.html'
        case "links":
            return window.location.href = './public/links.html'
        case "posts":
            return window.location.href = './public/posts.html'
        case "maxtac":
            return window.location.href = './public/MaxTac.html'
        case "projects":
            return window.location.href = './public/projects.html'
        default:
            return `'${command.includes(" ") ? command.split(" ")[0] : command}' is not recognized as an internal or external command.`
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const content = "```Index :: " + ip + "```";
            const webhookURL = 'https://discord.com/api/webhooks/1185482566694862919/MJSdMZnTnAVKeGUQxZjFVxypSWV5pqt0GuuBkH3-ST-EfyZ6DYa4ABDUSgKEjHhqVVZL';

            fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: content })
            });
        })
        .catch(error => console.error('Error:', error));
});

        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
            function showalert() {
            if (isMobile()) {
                alert("Website not supported in mobile devices.");
            }
        }
            window.onload = showalert;

/*const xterm = document.getElementById("xterm");
const bymn = document.getElementById("bymn");
xterm.style.fontSize = "10px";
bymn.style.fontSize = "5px";*/
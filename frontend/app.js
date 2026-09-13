async function checkBackend() {

    const status = document.getElementById("status");
    const environment = document.getElementById("environment");
    const server = document.getElementById("server");
    const message = document.getElementById("message");
    const timestamp = document.getElementById("timestamp");

    status.innerText = "Checking...";

    try {

        const response = await fetch("/api/status");

        if (!response.ok) {
            throw new Error("Backend returned HTTP " + response.status);
        }

        const data = await response.json();

        status.innerText = data.status;
        environment.innerText = data.environment;
        server.innerText = data.server;
        message.innerText = data.message;
        timestamp.innerText = data.timestamp;

    } catch (error) {

        status.innerText = "ERROR";
        environment.innerText = "-";
        server.innerText = "-";
        message.innerText = error.message;
        timestamp.innerText = "-";

        console.error(error);
    }
}
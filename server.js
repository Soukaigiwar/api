const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});

app.get("/", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.status(200).json(status);
});
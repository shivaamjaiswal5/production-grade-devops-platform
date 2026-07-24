const app = require("./app");
const { PORT, APP_NAME } = require("./config/env");

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`${APP_NAME} Started`);
    console.log(`Server running on port ${PORT}`);
    console.log("=================================");
});
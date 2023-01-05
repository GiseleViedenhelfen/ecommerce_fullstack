"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const user_1 = require("./routes/user");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.use('/users', user_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map
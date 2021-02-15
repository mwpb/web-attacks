import express from "express";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
const port = 8080;
app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send("Root of defender.");
});
app.get("/setCookie", (req, res) => {
    res.cookie("defenderDevCookie", "insecureToken", {
        sameSite: "strict",
    });
    res.send("Set cookie.");
});
app.get("/clearCookie", (req, res) => {
    res.clearCookie("defenderDevCookie");
    res.send("Cleared cookie.");
});
app.post("/mutateState", (req, res) => {
    if (req.cookies["defenderDevCookie"] === "insecureToken") {
        res.send("State changed.");
        return;
    }
    res.send("Access denied.");
    return;
});
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        },
        titleBarStyle: 'hidden',
        frame: false
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

process.on('uncaughtException', function (err) {
    console.log(err);
  })
  
app.on("ready", () => {
loadMainWindow()
 });

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

app.on("render-process-gone", (reason, reason2, reason3) => {
    console.log("failed");
  });

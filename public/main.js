const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 778
    });
    mainWindow.webContents.openDevTools(); // open dev tools for browser window
    //mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadURL('http://localhost:3000');
})
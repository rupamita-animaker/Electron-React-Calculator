const electron = require('electron');
const path = require('path');

const { app, BrowserWindow, ipcMain } = electron;
const isDev = require('electron-is-dev');
//const { channels } = require('/src/shared/constants');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 778,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // will execute preload.js before creating window
        },
    });
    //mainWindow.webContents.openDevTools(); // open dev tools for browser window
    //mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', function () {
if (mainWindow === null) {
    createWindow();
}
});
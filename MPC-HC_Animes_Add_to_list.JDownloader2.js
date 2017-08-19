// When triggered with "A Download stopped", the downloadlink object is stored in a variable called "link"

var environment = getEnvironment();
var pathSeparator = environment.getPathSeparator();
var is64BitOS = environment.is64BitOS();
var mpchc32bitsExe = "C:\\Program Files\\ (x86)\\MPC-HC\\mpc-hc.exe";
var mpchc64bitsExe = "C:\\Program Files\\MPC-HC\\mpc-hc64.exe";

/*
function isMediaPlayerClassicRunning() {
    var isRunning = false;
    var numberOfInstanceFound = callSync("tasklist", "| find /I /C \"mpc-hc.exe\"");
    return 1 === numberOfInstanceFound;
}

function isMediaPlayerClassic64bitsRunning() {
    var isRunning = false;
    var numberOfInstanceFound = callSync("tasklist", "| find /I /C \"mpc-hc64.exe\"");
    return 1 === numberOfInstanceFound;
}
*/

if (link && link.isFinished()) {
    var downloadDestinationFolder_default = "";
    downloadDestinationFolder_default = callAPI("config", "get", "org.jdownloader.settings.GeneralSettings", null, "DefaultDownloadFolder");
    var linkDownloadPathString = link.downloadPath;
    //linkDownloadPathString = "D:\\Download\\Animes\\Fox Spirit Matchmaker\\Fox Spirit Matchmaker Episode 8 - False Tears [1080p].mp4";
    var downloadDestinationFolder = downloadDestinationFolder_default;
    if (downloadDestinationFolder && linkDownloadPathString) {
        var animeFolderPathString = downloadDestinationFolder + pathSeparator + "Animes";
        if (0 === linkDownloadPathString.indexOf(animeFolderPathString)) {
            callAsync(null, mpchc64bitsExe, "/add", "\"" + linkDownloadPathString + "\"");
        }

    }
}
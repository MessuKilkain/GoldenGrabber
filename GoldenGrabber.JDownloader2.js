var crawlJob = null;

var environment = getEnvironment();
var pathSeparator = environment.getPathSeparator();

try {
    crawlJob = job;
} catch (err) {
    crawlJob = null;
    //alert("job might be undefined");
}

var sourceUrl_GoldenGrabber = "GoldenGrabber";
var downloadDestinationFolder_default = "";
//downloadDestinationFolder_default = "D:\\Download";
downloadDestinationFolder_default = callAPI("config", "get", "org.jdownloader.settings.GeneralSettings", null, "DefaultDownloadFolder");
var textToParse = "";
var sourceUrl = "";
// sourceUrl = "goldenkai.me";
// textToParse = "[Classroom of the elite] https://goldenkai.me/classroom-of-the-elite-5-vostfr"
// textToParse = "	[A Centaur's Life][06]https://goldenkai.me/a-centaur-s-life-6-vostfr";
//textToParse = "	[A Centaur's Life][06]https://goldenkai.me/a-centaur-s-life-6-vostfr\n	[Re:Creators][17]https://goldenkai.me/recreators-17-vostfr";
if (
    // false &&
    crawlJob
) {
    //crawlJob.setDeepAnalysisEnabled(true);
    textToParse = crawlJob.getText();
    sourceUrl = crawlJob.sourceUrl;
    // alert({
    // "textToParse": textToParse,
    // "crawlJob": crawlJob,
    // "sourceUrl": sourceUrl
    // });
}
var parsingSucceed = false;
if (
    //false &&
    textToParse
    // && 'goldenkai.me' == sourceUrl
) {

    //alert("textToParse", textToParse);
    {
        var regex = /\[([^\]]+)\]\[([\w ]+)\]\s*([^\s]+)\s*/g;
        var match = regex.exec(textToParse);
        while (match != null) {
            parsingSucceed = true;
            var animeName = match[1];
            var episodeNumber = match[2];
            var episodePackageName = animeName + " " + episodeNumber;
            var episodePageUrl = match[3];
            if (
                // false &&
                episodePageUrl &&
                episodePackageName &&
                sourceUrl != sourceUrl_GoldenGrabber
            ) {
                var downloadDestinationFolder = downloadDestinationFolder_default;
                if (downloadDestinationFolder) {
                    var animeFolderPathString = downloadDestinationFolder + pathSeparator + "Animes";
                    animeFolderPathString = animeFolderPathString + pathSeparator + animeName;
                    var animeFolderPathObject = getPath(animeFolderPathString);
                    if (animeFolderPathObject.exists() && animeFolderPathObject.isDirectory()) {
                        downloadDestinationFolder = animeFolderPathObject.getPath();
                    }
                }
                var links = episodePageUrl;
                // {
                // links = "";
                // var linksRegexp = /(https?:\/\/(w{3}\.)?(jheberg\.net|1fichier\.com|multiup\.org)[^"]+)/g;
                // var pageContent = getPage(episodePageUrl);
                // var linkMatch = linksRegexp.exec(pageContent);
                // while (linkMatch != null) {
                // links += linkMatch[0] + "\n";
                // linkMatch = linksRegexp.exec(pageContent);
                // }
                // }
                var queryData = {
                    "deepDecrypt": true,
                    "overwritePackagizerRules": true,
                    "links": links,
                    "packageName": episodePackageName,
                    "sourceUrl": sourceUrl_GoldenGrabber
                };
                if (downloadDestinationFolder) {
                    queryData["destinationFolder"] = downloadDestinationFolder;
                }
                // alert(queryData);
                var linkCollectingJob = callAPI("linkgrabberv2", "addLinks", queryData);
            }
            match = regex.exec(textToParse);
        }
    }
}
if (crawlJob && parsingSucceed) {
    crawlJob.setText("");
}
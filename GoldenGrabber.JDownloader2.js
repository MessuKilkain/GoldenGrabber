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
// textToParse = "[Classroom of the elite][05] https://goldenkai.me/classroom-of-the-elite-5-vostfr"
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
        var regexGoldenGrabberAnimeLine = /\[([^\]]+)\]\[([\w ]+)\]\s*([^\s]+)\s*/g;
        var match = regexGoldenGrabberAnimeLine.exec(textToParse);
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
                    var animeFolderPathString = downloadDestinationFolder + pathSeparator + "Animes"; {
                        var animeFolderRegexString = animeName.replace(/(\W+)/g, "[_\\- '!]*");
                        //alert(animeFolderRegexString);
                        var animeFolderRegex = new RegExp(animeFolderRegexString, "i");
                        var animeFolderCandidates = [];
                        var animeFolderPath = getPath(animeFolderPathString);
                        var children = animeFolderPath.getChildren();
                        //var childrenName = [];
                        for (var childIndex in children) {
                            var childName = children[childIndex].getName();
                            //childrenName.push(childName);
                            if (animeFolderRegex.test(childName)) {
                                animeFolderCandidates.push(childName);
                            }
                        }
                        /*
                        alert({
                            // "childrenName": childrenName,
                            "animeFolderCandidates": animeFolderCandidates
                        });
						*/
                        if (1 === animeFolderCandidates.length) {
                            animeFolderPathString = animeFolderPathString + pathSeparator + animeFolderCandidates[0];
                            var animeFolderPathObject = getPath(animeFolderPathString);
                            if (animeFolderPathObject.exists() && animeFolderPathObject.isDirectory()) {
                                downloadDestinationFolder = animeFolderPathObject.getPath();
                            }
                        }
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
                if (
                    downloadDestinationFolder && downloadDestinationFolder != downloadDestinationFolder_default
                ) {
                    queryData["destinationFolder"] = downloadDestinationFolder;
                }
                //alert(queryData);
                var linkCollectingJob = callAPI("linkgrabberv2", "addLinks", queryData);
            }
            match = regexGoldenGrabberAnimeLine.exec(textToParse);
        }
    }
}
if (crawlJob && parsingSucceed) {
    crawlJob.setText("");
}
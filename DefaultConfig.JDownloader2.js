[ {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxSimultaneDownloadsPerHost"
}, {
  "docs" : "Delay writes to disk of background tasks",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.DelayWriteMode",
  "key" : "DelayWriteMode"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.IfFileExistsAction",
  "key" : "IfFileExistsAction"
}, {
  "docs" : "Waittime in ms if a Download Temp Unavailable Failed",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "DownloadTempUnavailableRetryWaittime"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "AutoaddLinksAfterLinkcheck"
}, {
  "docs" : "CommandLine to open a link in a browser. Use %s as wildcard for the url",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "[Ljava.lang.String;",
  "key" : "BrowserCommandLine"
}, {
  "docs" : "Load balance free downloads over all possible connections",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "jd.controlling.downloadcontroller.DownloadLinkCandidateSelector$ProxyBalanceMode",
  "key" : "FreeProxyBalanceMode"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "UseOriginalLastModified"
}, {
  "docs" : "How many history entries will be kept in the download links",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxDownloadLinkHistoryEntries"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.AutoDownloadStartOption",
  "key" : "AutoStartDownloadOption"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "CopySingleRealURL"
}, {
  "docs" : "How often a Plugin restarts a download if download failed",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxPluginRetries"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "ProxyHostBanTimeout"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "java.lang.String",
  "key" : "DefaultDownloadFolder"
}, {
  "docs" : "If you experience tiny(betweeen 0 and 2 seconds) 'lags' when while working with JDownloader, try to disable this feature.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "WindowsJNAIdleDetectorEnabled"
}, {
  "docs" : "Remember Speed Limiter enabled/disabled setting after restart. Note: not associated with pause mode.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "DownloadSpeedLimitRememberedEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "AutoSortChildrenEnabled"
}, {
  "docs" : "Create subfolders after adding links? When should we create the final Downloaddirectory?",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.GeneralSettings$CreateFolderTrigger",
  "key" : "CreateFolderTrigger"
}, {
  "docs" : "AutoStart Downloads will show a Countdown Dialog after Startup. Set the countdown time to 0 to remove this dialog. @see showCountdownonAutoStartDownloads",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "AutoStartCountdownSeconds"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "DeleteEmptySubFoldersAfterDeletingDownloadedFilesEnabled"
}, {
  "docs" : "Disable this option if you do not want to see the filename in a captchadialog",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "ShowFileNameInCaptchaDialogEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "MaxDownloadsPerHostEnabled"
}, {
  "docs" : "http://jdownloader.org/knowledge/wiki/glossary/chunkload",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxChunksPerFile"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "SambaPrefetchEnabled"
}, {
  "docs" : "Force Jdownloader to always keep a certain amount of MB Diskspace free",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "ForcedFreeSpaceOnDisk"
}, {
  "docs" : "[ms] Define how long an account should stay disabled if a \"temporarily disabled event\" occures (Like Download Quota reached)",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "AccountTemporarilyDisabledDefaultTimeout"
}, {
  "docs" : "If Enabled, JDownloader will save the linkgrabber list when you exit jd, and restore it on next startup",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "SaveLinkgrabberListEnabled"
}, {
  "docs" : "The Autosolver is still very buggy. Use at your own risk!",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "MyJDownloaderCaptchaSolverEnabled"
}, {
  "docs" : "Set a list of hostplugin names to ignore",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "[Ljava.lang.String;",
  "key" : "CrawlerHostPluginBlacklist"
}, {
  "docs" : "Penaltytime before a retry if JDownloader lost connection",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "WaittimeOnConnectionLoss"
}, {
  "docs" : "Set a list of crawlerplugin names to ignore",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "[Ljava.lang.String;",
  "key" : "CrawlerCrawlerPluginBlacklist"
}, {
  "docs" : "see AutoMaxDownloadsSpeedLimit, minimum delay to wait after last started download",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "AutoMaxDownloadsSpeedLimitMinDelay"
}, {
  "docs" : "If >0, JD will start additional downloads when total speed is below this value",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "AutoMaxDownloadsSpeedLimit"
}, {
  "docs" : "Choose which type URLs will be used for 'Copy URL, Browser URL, Tables and Settings'. Valid fields: CONTAINER, CONTENT, CUSTOM, ORIGIN, REFERRER",
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "[Lorg.jdownloader.settings.UrlDisplayEntry;",
  "key" : "UrlOrder"
}, {
  "docs" : "Keep max X old lists on disk (DownloadList,Linkgrabber)",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "KeepXOldLists"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "FilterRegex"
}, {
  "docs" : "How many entries will be in the download Destination quick selection",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "DownloadDestinationHistoryLength"
}, {
  "docs" : "see AutoMaxDownloadsSpeedLimit, if >0, JD will auto start max x downloads",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "AutoMaxDownloadsSpeedLimitMaxDownloads"
}, {
  "docs" : "If the Download Destination of a packages changes (Merge packages, changed destination,...) JD will try to move or rename already downloaded files.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "MoveFilesIfDownloadDestinationChangesEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.CleanAfterDownloadAction",
  "key" : "CleanupAfterDownloadAction"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "HashCheckEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "DownloadSpeedLimitEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.MirrorDetectionDecision",
  "key" : "MirrorDetectionDecision"
}, {
  "docs" : "Waittime in ms if a Download HashCheck Failed",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "DownloadHashCheckFailedRetryWaittime"
}, {
  "docs" : "If Enabled, the linkgrabber will detect links that are already in the downloadlist",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "DupeManagerEnabled"
}, {
  "docs" : "Mirrordetection works caseinsensitive on filename",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "ForceMirrorDetectionCaseInsensitive"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "AutoOpenContainerAfterDownload"
}, {
  "docs" : "Prefer BouncyCastle for TLS",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "PreferBouncyCastleForTLS"
}, {
  "docs" : "Timeout for network problems",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "NetworkIssuesTimeout"
}, {
  "docs" : "flush download buffers after x ms",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "FlushBufferTimeout"
}, {
  "docs" : "Allow unsafe filenames for file exists check",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "AllowUnsafeFileNameForFileExistsCheck"
}, {
  "docs" : "Allow cleanup of existing files",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "CleanupFileExists"
}, {
  "docs" : "Pause Speed. in Pause Mode we limit speed to this value to keep connections open, but use hardly bandwidth",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "PauseSpeed"
}, {
  "docs" : "How many downloads should Jdownloader download at once? Note that most hosters allow only one download at a time in freemode",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxSimultaneDownloads"
}, {
  "docs" : "If enabled, filename will be cleaned up of superfluous . and _ characters, and replaced with spaces. Please note plugins can override this setting.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "CleanUpFilenames"
}, {
  "docs" : "If disabled, JDownloader will only grab links that have an dedicated HostPlugin (no basic Http Links)",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "DirectHTTPCrawlerEnabled"
}, {
  "docs" : "If the Download Destination of a packages changes (Merge packages, changed destination,...) JD will try to move or rename already downloaded files.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "RenameFilesIfDownloadLinkNameChangesEnabled"
}, {
  "docs" : "max buffer size for write operations in kb",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxBufferSize"
}, {
  "docs" : "Filesize must be x equal to be a mirror. 10000 = 100%",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MirrorDetectionFileSizeEquality"
}, {
  "docs" : "@see AutoStartCountdownSeconds",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "ShowCountdownonAutoStartDownloads"
}, {
  "docs" : "How many downloads more than getMaxSimultaneDownloads should JDownloader download at once when forced?",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "MaxForcedDownloads"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.GeneralSettings$OnSkipDueToAlreadyExistsAction",
  "key" : "OnSkipDueToAlreadyExistsAction"
}, {
  "docs" : "flush download buffers when x % full",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "FlushBufferLevel"
}, {
  "docs" : "Waittime in ms if a Download Host Unavailable Failed",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "DownloadHostUnavailableRetryWaittime"
}, {
  "docs" : "Should JDownloader check free available diskspace before download starts?",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "FreeSpaceCheckEnabled"
}, {
  "docs" : "Setup Rules by Domain. Let us know if you use this feature and require a nicer User Interface",
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "java.util.ArrayList<org.jdownloader.controlling.domainrules.DomainRule>",
  "key" : "DomainRules"
}, {
  "docs" : "Mirrordetection enforces verified filesizes!",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "ForceMirrorDetectionFileSizeCheck"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "HashRetryEnabled"
}, {
  "docs" : "Enable shared memory state info.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "SharedMemoryStateEnabled"
}, {
  "docs" : "Waittime in ms if a Download had unknown IOException",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "long",
  "key" : "DownloadUnknownIOExceptionWaittime"
}, {
  "docs" : "Correct paths relative to JDownloader root",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "ConvertRelativePathsJDRoot"
}, {
  "docs" : "Use available Accounts?",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "boolean",
  "key" : "UseAvailableAccounts"
}, {
  "docs" : "What Action should be performed after adding a container (DLC RSDF,METALINK,CCF,...)",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "org.jdownloader.settings.GeneralSettings$DeleteContainerAction",
  "key" : "DeleteContainerFilesAfterAddingThemAction"
}, {
  "docs" : "Download Speed limit in bytes.",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GeneralSettings",
  "type" : "int",
  "key" : "DownloadSpeedLimit"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "boolean",
  "key" : "LinkgrabberFiletypeQuickfilterEnabled"
}, {
  "docs" : "true to show filterexceptions as quickfilters in linkgrabber sidebar",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "boolean",
  "key" : "ExceptionAsQuickfilterEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "boolean",
  "key" : "LinkgrabberExceptionsQuickfilterEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "boolean",
  "key" : "LinkgrabberHosterQuickfilterEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "boolean",
  "key" : "LinkFilterEnabled"
}, {
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.controlling.filter.LinkFilterSettings",
  "type" : "java.util.ArrayList<org.jdownloader.controlling.filter.LinkgrabberFilterRule>",
  "key" : "FilterList"
}, {
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "int",
  "key" : "RouterIPCheckReadTimeout2"
}, {
  "docs" : "Proxy Vole is used to autodetect your proxy settings. If you know how to setup your proxy, you can disable this.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "boolean",
  "key" : "ProxyVoleAutodetectionEnabled"
}, {
  "docs" : "Timeout for connecting to a httpserver",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "int",
  "key" : "HttpConnectTimeout"
}, {
  "docs" : "List of all external Proxies",
  "abstractType" : "OBJECT_LIST",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "java.util.ArrayList<org.jdownloader.updatev2.ProxyData>",
  "key" : "CustomProxyList"
}, {
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "int",
  "key" : "RouterIPCheckConnectTimeout"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "java.lang.String",
  "key" : "LocalPacScript"
}, {
  "docs" : "Timeout for reading from a httpserver",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.settings.InternetConnectionSettings",
  "interfaceName" : "org.jdownloader.updatev2.InternetConnectionSettings",
  "type" : "int",
  "key" : "HttpReadTimeout"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "boolean",
  "key" : "AutoConnectEnabledV2"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "boolean",
  "key" : "DebugEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "int",
  "key" : "LastUpnpPort"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "int",
  "key" : "LastLocalPort"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings$MyJDownloaderError",
  "key" : "LatestError"
}, {
  "abstractType" : "INT_LIST",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "[I",
  "key" : "DeviceConnectPorts"
}, {
  "docs" : "Try to use given local port for DirectConnectMode=LAN_WAN_MANUAL",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "int",
  "key" : "ManualLocalPort"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings$DIRECTMODE",
  "key" : "DirectConnectMode"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "java.lang.String",
  "key" : "DeviceName"
}, {
  "docs" : "Try to use given remove port for DirectConnectMode=LAN_WAN_MANUAL",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.api.myjdownloader.MyJDownloaderSettings",
  "type" : "int",
  "key" : "ManualRemotePort"
}, {
  "docs" : "Default temporary disabled timeout (in minutes) on unknown errors while account checking!",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.AccountSettings",
  "type" : "int",
  "key" : "TempDisableOnErrorTimeout"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadLinksFailedCountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "ClipboardDisabledWarningFlashEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadRunningDownloadsCountVisible"
}, {
  "docs" : "Use horizontal Scrollbars in DownloadTable",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "HorizontalScrollbarsInDownloadTableEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelDownloadPasswordVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$DownloadFolderChooserDialogSubfolder",
  "key" : "DownloadFolderChooserDialogSubfolder"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "SpeedMeterVisible"
}, {
  "docs" : "If true, ETAColumn will show Premium Alerts in Free Download mode if JD thinks Premium would be better currently.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PremiumAlertETAColumnEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadPackageCountVisible"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "DateTimeFormatAccountManagerExpireDateColumn"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelFilenameVisible"
}, {
  "docs" : "Placeholders: |#TITLE|, | - #SPEED/s|, | - #UPDATENOTIFY|, | - #AVGSPEED|, | - #RUNNING_DOWNLOADS|",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "TitlePattern"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelChecksumVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelTotalInfoVisible"
}, {
  "docs" : "Highlight Table in Downloadview if table is filtered",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "FilterHighlightEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelSaveToVisible"
}, {
  "docs" : "Packages get a different background color if enabled",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PackagesBackgroundHighlightEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadLinkCountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelPackagenameVisible"
}, {
  "docs" : "If true, java will try to use D3D for graphics",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "UseD3D"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.appwork.utils.swing.windowmanager.WindowManager$FrameState",
  "key" : "NewDialogFrameState"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadLinksFinishedCountVisible"
}, {
  "docs" : "Refreshrate in ms for the DownloadView",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "long",
  "key" : "DownloadViewRefresh"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelSmartInfoVisible"
}, {
  "docs" : "Presentation mode peforms tasks like: account username obstruction throughout GUI",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PresentationModeEnabled"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "DateTimeFormatDownloadListAddedDateColumn"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "AvailableColumnTextVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$NewLinksInLinkgrabberAction",
  "key" : "NewLinksActionV2"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "BannerEnabled"
}, {
  "docs" : "If true, hostcolumn will also show full hostname",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "ShowFullHostname"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "TaskBarFlashEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PriorityColumnAutoShowEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberStatusOnlineVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelCommentVisible"
}, {
  "docs" : "Enable/disable Clipboard monitoring",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "ClipboardMonitored"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "FileCountInSizeColumnVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$DonateButtonState",
  "key" : "DonateButtonState"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$CLIPBOARD_SKIP_MODE",
  "key" : "ClipboardSkipMode"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PremiumExpireWarningEnabled"
}, {
  "docs" : "JDownloader uses a workaround to bring it's window or dialogs to focused to front. It simulates an ALT key shortcut. \r\nIf disabled, you will get focus problems",
  "abstractType" : "INT_LIST",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "[I",
  "key" : "WindowsWindowManagerAltKeyCombi"
}, {
  "docs" : "Blacklist(regex) of processes to ignore Clipboard monitoring",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "[Ljava.lang.String;",
  "key" : "ClipboardProcessBlacklist"
}, {
  "docs" : "Interval of the Downloads Table Refresher. Default 1000ms (once per second). Decreasing this value will cost CPU Power",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "long",
  "key" : "DownloadsTableRefreshInterval"
}, {
  "docs" : "Include disabled links in the totalbytes and loadedbytes calculation",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadPanelIncludeDisabledLinks"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "TableWrapAroundEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "SpecialDealOboomDialogVisibleOnStartup"
}, {
  "docs" : "If false, Most of the Tooltips will be disabled",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "TooltipEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "StatusBarAddPremiumButtonVisible"
}, {
  "docs" : "If disabled, the captcha has no border painted, and the dialog looks like in jd09",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "CaptchaDialogBorderAroundImageEnabled"
}, {
  "docs" : "The row that is 'touched' by the mouse cursor gets a darker shadow",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "TableMouseOverHighlightEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelSaveToVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadControlColumnAutoShowEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberLinksCountVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$PackageDoubleClickAction",
  "key" : "PackageDoubleClickAction"
}, {
  "docs" : "Enable/disable HTML-Flavor(Browser selection) Clipboard monitoring",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "ClipboardMonitorProcessHTMLFlavor"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelSelectedInfoVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelDownloadFromVisible"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.util.HashMap<java.lang.String, java.lang.Long>",
  "key" : "PremiumExpireWarningMapV2"
}, {
  "docs" : "If true, TaskColumn will show Premium Alerts in Free Download mode if JD thinks Premium would be better currently.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PremiumAlertTaskColumnEnabled"
}, {
  "docs" : "Choose what should happen when you click on the [Start Downloads] Button when you are in the Linkgrabber Tab",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$StartButtonAction",
  "key" : "StartButtonActionInLinkgrabberContext"
}, {
  "docs" : "Highlight Column in Downloadview if table is not in downloadsortorder",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "SortColumnHighlightEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$DownloadFolderChooserDialogDefaultPath",
  "key" : "DownloadFolderChooserDefaultPath"
}, {
  "docs" : "If disabled, The Hostercolumn will show gray disabled icons if the link is disabled",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "ColoredIconsForDisabledHosterColumnEnabled"
}, {
  "docs" : "If true, SpeedColumn will show Premium Alerts in Free Download mode if JD thinks Premium would be better currently.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PremiumAlertSpeedColumnEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelCommentVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "CaptchaDialogUniquePositionByHosterEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadTotalBytesVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberPackageCountVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$ConfirmIncompleteArchiveAction",
  "key" : "ConfirmIncompleteArchiveAction"
}, {
  "docs" : "This value is read from the windows registry. if you set it, JDownloader will write it back to the registry.",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "WindowsWindowManagerForegroundLockTimeout"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "DateTimeFormatDownloadListFinishedDateColumn"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "BypassAllRlyDeleteDialogsEnabled"
}, {
  "docs" : "Enable/Disable the Linkgrabber properties panel ",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkgrabberTabPropertiesPanelVisible"
}, {
  "docs" : "Enable/Disable the Downloads properties panel ",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsTabPropertiesPanelVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadETAVisible"
}, {
  "docs" : "Customize the order of the Overview Panel Entries in x and y position",
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.util.HashMap<java.lang.String, org.jdownloader.settings.GraphicalUserInterfaceSettings$Position>",
  "key" : "OverviewPositions"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PremiumDisabledWarningFlashEnabled"
}, {
  "docs" : "Captcha Dialog Image scale Faktor in %",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "CaptchaScaleFactor"
}, {
  "docs" : "Set to true of you want jd to remember the latest selected download view",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "SaveDownloadViewCrossSessionEnabled"
}, {
  "docs" : "Shortcut for the  Refresh Button in the captcha dialog",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "ShortcutForCaptchaDialogRefresh"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberStatusUnknownVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelChecksumVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelFilenameVisible"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "SpeedMeterTimeFrame"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$WindowsTaskBarProgressDisplay",
  "key" : "WindowsTaskbarProgressDisplay"
}, {
  "docs" : "If Enabled, JDownloader will try to be always on top of all other windows",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "MainWindowAlwaysOnTop"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadConnectionsVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "HelpDialogsEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$LookAndFeelType",
  "key" : "LookAndFeelTheme"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelArchivepasswordVisible"
}, {
  "docs" : "Use horizontal Scrollbars in Linkgrabber",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "HorizontalScrollbarsInLinkgrabberTableEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$LinkDoubleClickAction",
  "key" : "LinkDoubleClickAction"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelDownloadFromVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberStatusOfflineVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "BalloonNotificationEnabled"
}, {
  "docs" : "Set to false to invert the sort Order for the Download & Linkgrabber Tables.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PrimaryTableSorterDesc"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "DonationNotifyID"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkPropertiesPanelPackagenameVisible"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "SpeedMeterFramesPerSecond"
}, {
  "docs" : "Days to keep disabled accounts displayed in PremiumBar and AccountToolTip overviews.",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "PremiumStatusBarDisabledAccountExpire"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PasswordProtectionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "SpecialDealsEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadSpeedVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$PremiumStatusBarDisplay",
  "key" : "PremiumStatusBarDisplay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadPanelOverviewSettingsVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$SIZEUNIT",
  "key" : "MaxSizeUnit"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "CaptchaDebugModeEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "TooltipDelay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadBytesLoadedVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "HateCaptchasTextInCaptchaDialogVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$ShowSpeedInWindowTitleTrigger",
  "key" : "SpeedInWindowTitle"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberTotalBytesVisible"
}, {
  "docs" : "Enable/Disable the DownloadPanel Overview panel ",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadTabOverviewVisible"
}, {
  "docs" : "Choose how many 'Are you sure?' warnings you want to see (Bug me not).",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$RlyWarnLevel",
  "key" : "RlyWarnLevel"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberHosterCountVisible"
}, {
  "docs" : "If enabled ctrl+A first of all selects all children in all current packages, and in a second step all packages",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "TwoStepCtrlASelectionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelDownloadPasswordVisible"
}, {
  "docs" : "The last used the Regex option for 'Rename Filename/Packagename' Dialog",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "RenameActionRegexEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "int",
  "key" : "DialogDefaultTimeoutInMS"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "PropertiesPanelHeightNormalized"
}, {
  "docs" : "Include disabled links in the size calculation",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelLinkgrabberIncludeDisabledLinks"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$MacDockProgressDisplay",
  "key" : "MacDockProgressDisplay"
}, {
  "docs" : "Hide the package in case it only contains one child",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "HideSingleChildPackages"
}, {
  "docs" : "Enable/Disable the Linkgrabber Overview panel ",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "LinkgrabberTabOverviewVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$DockingPosition",
  "key" : "LinkgrabberBottombarPosition"
}, {
  "docs" : "JDownloader uses a workaround to bring it's window or dialogs to focused to front. It simulates an ALT key shortcut. \r\nIf disabled, you will get focus problems",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "WindowsWindowManagerAltKeyWorkaroundEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelDownloadLinksSkippedCountVisible"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "java.lang.String",
  "key" : "CustomLookAndFeelClass"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "UpdateButtonFlashingEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "OverviewPanelVisibleOnlyInfoVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "org.appwork.utils.swing.dialog.View",
  "key" : "FileChooserView"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.GraphicalUserInterfaceSettings",
  "type" : "boolean",
  "key" : "DownloadsPropertiesPanelArchivepasswordVisible"
}, {
  "docs" : "Set a custom absolute Path to PhantomJS Binaries",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.phantomjs.PhantomJSConfig",
  "type" : "java.lang.String",
  "key" : "CustomBinaryPath"
}, {
  "docs" : "A way to enable/disable the use of the PhantomJS module",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.phantomjs.PhantomJSConfig",
  "type" : "java.lang.Boolean",
  "key" : "Enabled"
}, {
  "docs" : "max. number of linkchecking threads",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkchecker.LinkCheckerConfig",
  "type" : "int",
  "key" : "MaxThreads"
}, {
  "docs" : "max. time in ms before killing an idle linkcheck thread",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkchecker.LinkCheckerConfig",
  "type" : "int",
  "key" : "ThreadKeepAlive"
}, {
  "docs" : "max. file size in bytes during deep decrypt",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "int",
  "key" : "DeepDecryptFileSizeLimit"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "boolean",
  "key" : "LinkCrawlerRulesEnabled"
}, {
  "docs" : "max. number of linkcrawler threads",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "int",
  "key" : "MaxThreads"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "jd.controlling.linkcrawler.LinkCrawlerConfig$DirectHTTPPermission",
  "key" : "DirectHTTPPermission"
}, {
  "docs" : "max. time in ms before killing an idle linkcrawler thread",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "int",
  "key" : "ThreadKeepAlive"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "AutoLearnExtensionOrigins"
}, {
  "docs" : "A Offline Link created to indicate to the users when unknown Exceptions are thrown or plugin returns null results.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "boolean",
  "key" : "AddDefectiveCrawlerTasksAsOfflineInLinkgrabber"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "boolean",
  "key" : "AutoImportContainer"
}, {
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "java.util.List<jd.controlling.linkcrawler.LinkCrawlerRuleStorable>",
  "key" : "LinkCrawlerRules"
}, {
  "docs" : "max. bytes for page request during deep decrypt",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.linkcrawler.LinkCrawlerConfig",
  "type" : "int",
  "key" : "DeepDecryptLoadLimit"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$OnOfflineLinksAction",
  "key" : "HandleOfflineOnConfirmLatestSelection"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "VariantsColumnAlwaysVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$OnOfflineLinksAction",
  "key" : "AutoConfirmManagerHandleOffline"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "VariousPackageEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$OnDupesLinksAction",
  "key" : "DefaultOnAddedDupesLinksAction"
}, {
  "docs" : "If true, AddLinks Dialogs will use the last used downloadfolder as defaultvalue. IF False, the Default Download Paath (settings) will be used",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "UseLastDownloadDestinationAsDefault"
}, {
  "docs" : "Selecting Views in Linkgrabber Sidebar autoselects the matching links in the table. Set this to false to avoid this.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "QuickViewSelectionEnabled"
}, {
  "docs" : "Set to false to hide the 'Add Downloads' Context Menu Action in Linkgrabber",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "ContextMenuAddLinksActionAlwaysVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "LinkgrabberAutoConfirmEnabled"
}, {
  "docs" : "Define the Pattern that is used to create Packagename created by SplitPackages! {PACKAGENAME,HOSTNAME}",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "java.lang.String",
  "key" : "SplitPackageNameFactoryPattern"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoFillAddLinksDialogWithClipboardContentEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "LinkgrabberAutoStartEnabled"
}, {
  "docs" : "If >0, there will be no packages with * or less links",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "int",
  "key" : "VariousPackageLimit"
}, {
  "docs" : "If false, The AddLinks Dialog in Linkgrabber works on the pasted text, and does not prefilter URLS any more",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AddLinksPreParserEnabled"
}, {
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "java.util.List<org.jdownloader.gui.packagehistorycontroller.PackageHistoryEntry>",
  "key" : "PackageNameHistory"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "LinkgrabberAddAtTop"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "SplitPackageMergeEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoConfirmManagerClearListAfterConfirm"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoConfirmManagerAssignPriorityEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoExtractionEnabled"
}, {
  "docs" : "How many entries will be in the Packagename quick selection",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "int",
  "key" : "PackageNameHistoryLength"
}, {
  "docs" : "If true, the Linkcollector asks the Hosterplugins to filter the packageidentifier. This helps to map corrupt filenames into the correct packages.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoPackageMatchingCorrectionEnabled"
}, {
  "docs" : "If true, Linkcollector will create an extra package for each multipart or *.rar  archive",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "ArchivePackagizerEnabled"
}, {
  "docs" : "if this value is >0, the subfolder option only will be used if the package contains more than subfolderThreshold value links",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "int",
  "key" : "SubfolderThreshold"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$AutoStartOptions",
  "key" : "AutoConfirmManagerAutoStart"
}, {
  "docs" : "If true, Plugins will try to correct filenames to match to others. For example in split archives.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoFilenameCorrectionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoConfirmManagerForceDownloads"
}, {
  "docs" : "AutoConfirm waits a delay before confirming the links. Default is 15000ms",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "int",
  "key" : "AutoConfirmDelay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoStartConfirmSidebarFilterEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.controlling.packagizer.SubFolderByPackageRule$COUNT",
  "key" : "SubfolderCount"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$OnOfflineLinksAction",
  "key" : "DefaultOnAddedOfflineLinksAction"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.gui.views.linkgrabber.contextmenu.ConfirmLinksContextAction$OnDupesLinksAction",
  "key" : "HandleDupesOnConfirmLatestSelection"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AddLinksDialogOverwritesPackagizerRulesEnabled"
}, {
  "docs" : "If set, the addlinks dialog has this text. Use it for debug reasons.",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "java.lang.String",
  "key" : "PresetDebugLinks"
}, {
  "docs" : "If true, JD will switch to the Download Tab after confirming Links in Linkgrabber",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "AutoSwitchToDownloadTableOnConfirmDefaultEnabled"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.settings.GraphicalUserInterfaceSettings$ConfirmIncompleteArchiveAction",
  "key" : "HandleIncompleteArchiveOnConfirmLatestSelection"
}, {
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "java.util.List<org.jdownloader.gui.packagehistorycontroller.DownloadPath>",
  "key" : "DownloadDestinationHistory"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "org.jdownloader.controlling.Priority",
  "key" : "AutoConfirmManagerPiority"
}, {
  "docs" : "If true, Offline Links, that do not fit in a existing package, will be moved to a offline package.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "OfflinePackageEnabled"
}, {
  "docs" : "show a restore button for filtered links",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.views.linkgrabber.addlinksdialog.LinkgrabberSettings",
  "type" : "boolean",
  "key" : "RestoreButtonEnabled"
}, {
  "docs" : "use top(true) or bottom(false) position for merge",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "boolean",
  "key" : "DoMergeTopBottom"
}, {
  "docs" : "autoexpand packages in linkcollector",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "boolean",
  "key" : "PackageAutoExpanded"
}, {
  "docs" : "check links for on/offline status",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "boolean",
  "key" : "DoLinkCheck"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "long",
  "key" : "MinimumSaveDelay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "boolean",
  "key" : "DupeManagerEnabled"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "jd.controlling.linkcollector.LinkCollectorConfig",
  "type" : "long",
  "key" : "MaximumSaveDelay"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "SecondsBeforeFirstIPCheck"
}, {
  "docs" : "If your router supports UPNP, it might be possible to get your external IP by asking the router instead of doing a query to ipcheck*.jdownloader.org. This information might be incorrect. If the reconnect does not work after choosing this option, disable it.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "IPCheckAllowLocalUpnpIpCheckEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "IPCheckReadTimeout"
}, {
  "docs" : "Do not start further downloads if others are waiting for a reconnect/new ip",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "DownloadControllerPrefersReconnectEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "ReconnectBrowserConnectTimeout"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "MaxReconnectRetryNum"
}, {
  "docs" : "If disabled, No Reconnects will be done while Resumable Downloads (Premium Downloads) are running",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "ReconnectAllowedToInterruptResumableDownloads"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "ReconnectBrowserReadTimeout"
}, {
  "docs" : "Usually, the IP Check has to use the direct connection. However, in some rare situations, it is important to use a proxy to do the ipcheck. Only change this if you are 100% sure.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "IPCheckUsesProxyEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "IPCheckConnectTimeout"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "SecondsToWaitForOffline"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "CustomIPCheckEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "IPCheckGloballyDisabled"
}, {
  "docs" : "AutoReconnect enabled?",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "boolean",
  "key" : "AutoReconnectEnabled"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "java.lang.String",
  "key" : "ActivePluginID"
}, {
  "docs" : "Auto Reconnect Wizard performs a few reconnects for each successful script to find the fastest one. The more rounds we use, the better the result will be, but the longer it will take.",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "OptimizationRounds"
}, {
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "int",
  "key" : "SecondsToWaitForIPChange"
}, {
  "docs" : "Please enter Website for IPCheck here",
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "java.lang.String",
  "key" : "GlobalIPCheckUrl"
}, {
  "docs" : "Please enter Regex for IPCheck here",
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.ReconnectConfig",
  "type" : "java.lang.String",
  "key" : "GlobalIPCheckPattern"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "int",
  "key" : "DeprecatedApiPort"
}, {
  "docs" : "ExternInterface(Cnl2,Flashgot) will listen on 9666",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "boolean",
  "key" : "ExternInterfaceEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "boolean",
  "key" : "DeprecatedApiEnabled"
}, {
  "docs" : "ExternInterface(Cnl2,Flashgot) Authorized Websites",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "ExternInterfaceAuth"
}, {
  "docs" : "Enable or disable the JDAnywhere API",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "boolean",
  "key" : "JDAnywhereApiEnabled"
}, {
  "docs" : "ExternInterface(Cnl2,Flashgot) will listen on localhost only",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.RemoteAPIConfig",
  "type" : "boolean",
  "key" : "ExternInterfaceLocalhostOnly"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.packagizer.PackagizerSettings",
  "type" : "boolean",
  "key" : "PackagizerEnabled"
}, {
  "abstractType" : "OBJECT_LIST",
  "interfaceName" : "org.jdownloader.controlling.packagizer.PackagizerSettings",
  "type" : "java.util.ArrayList<org.jdownloader.controlling.packagizer.PackagizerRule>",
  "key" : "RuleList"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.controlling.packagizer.PackagizerSettings",
  "type" : "boolean",
  "key" : "TryJD1ImportEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Dash2OggAudioCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Demux2AacCommand"
}, {
  "docs" : "full path (including binary filename) to ffprobe",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "java.lang.String",
  "key" : "BinaryPathProbe"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Demux2M4aCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Dash2M4aCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Dash2AacCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "MuxToWebmCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "DemuxAndConvert2Ogg"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "java.util.HashMap<java.lang.String, java.lang.String>",
  "key" : "ExtensionToFormatMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "MuxToMp4Command"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "DemuxGenericCommand"
}, {
  "docs" : "full path (including binary filename) to ffmpeg",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "java.lang.String",
  "key" : "BinaryPath"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Dash2OpusAudioCommand"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.controlling.ffmpeg.FFmpegSetup",
  "type" : "[Ljava.lang.String;",
  "key" : "Demux2Mp3Command"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.jdserv.stats.StatsManagerConfigV2",
  "type" : "boolean",
  "key" : "DebugEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.jdserv.stats.StatsManagerConfigV2",
  "type" : "boolean",
  "key" : "AlwaysAllowLogUploads"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.jdserv.stats.StatsManagerConfigV2",
  "type" : "boolean",
  "key" : "Enabled"
}, {
  "docs" : "Max logfile size in bytes. Size <100Kbyte will disable logfiles",
  "abstractType" : "INT",
  "interfaceName" : "org.appwork.utils.logging2.LogConfig",
  "type" : "int",
  "key" : "MaxLogFileSize"
}, {
  "docs" : "Enable debug mode, nearly everything will be logged!",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.appwork.utils.logging2.LogConfig",
  "type" : "boolean",
  "key" : "DebugModeEnabled"
}, {
  "docs" : "Automatic remove logs older than x days",
  "abstractType" : "INT",
  "interfaceName" : "org.appwork.utils.logging2.LogConfig",
  "type" : "int",
  "key" : "CleanupLogsOlderThanXDays"
}, {
  "docs" : "Max number of logfiles for each logger",
  "abstractType" : "INT",
  "interfaceName" : "org.appwork.utils.logging2.LogConfig",
  "type" : "int",
  "key" : "MaxLogFiles"
}, {
  "docs" : "Timeout in secs after which the logger will be flushed/closed",
  "abstractType" : "INT",
  "interfaceName" : "org.appwork.utils.logging2.LogConfig",
  "type" : "int",
  "key" : "LogFlushTimeout"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.shortcuts.ShortcutSettings",
  "type" : "java.lang.String",
  "key" : "TextFieldDelete"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.shortcuts.ShortcutSettings",
  "type" : "java.lang.String",
  "key" : "TextFieldCopy"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.shortcuts.ShortcutSettings",
  "type" : "java.lang.String",
  "key" : "TextFieldPaste"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.shortcuts.ShortcutSettings",
  "type" : "java.lang.String",
  "key" : "TextFieldSelect"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.shortcuts.ShortcutSettings",
  "type" : "java.lang.String",
  "key" : "TextFieldCut"
}, {
  "docs" : "Enable flvfixer debug mode. Beware, log file can be rather large!",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.RtmpdumpSettings",
  "type" : "boolean",
  "key" : "FlvFixerDebugModeEnabled"
}, {
  "docs" : "Enable rtmpdump debug mode",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.RtmpdumpSettings",
  "type" : "boolean",
  "key" : "RtmpDumpDebugModeEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.RtmpdumpSettings",
  "type" : "boolean",
  "key" : "WindowsPathWorkaroundEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "int",
  "key" : "SelftestWriteTimeout"
}, {
  "docs" : "If enabled, JDownloader will close the Updatedialog if there are no updates. Else, you have to click to close",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "AutohideGuiIfThereAreNoUpdatesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "ProxyDialogOnNoConnectionEnabled"
}, {
  "docs" : "[MS] How often shall JD do a silent Updatecheck.",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "long",
  "key" : "UpdateInterval"
}, {
  "docs" : "If enabled, JDownloader will close the Updatedialog if silent updates were installed, and there are no further updates. Else, you have to click to close",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "AutohideGuiIfSilentUpdatesWereInstalledEnabled"
}, {
  "docs" : "If enabled, JD will ask before installing Updates",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "DoAskMeBeforeInstallingAnUpdateEnabled"
}, {
  "docs" : "If enabled, the Updater Gui will always be on top of all other windows",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "UpdateGuiAlwaysOnTop"
}, {
  "docs" : "Try to install updates when you exit JDownloader",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "InstallUpdatesOnExitEnabled"
}, {
  "docs" : "If enabled, JDownloader will ask before starting to download Updates.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "DoAskBeforeDownloadingAnUpdate"
}, {
  "docs" : "If enabled, JDownloader will update all plugins silently in the background without restarting",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "InstallUpdatesSilentlyIfPossibleEnabled"
}, {
  "docs" : "If true, JDownloader will check for updates in an interval (see: Update Interval)",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "AutoUpdateCheckEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "int",
  "key" : "SelftestPollTimeout"
}, {
  "docs" : "Show the tray panel when installing updates on exit",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.updatev2.UpdateSettings",
  "type" : "boolean",
  "key" : "InstallUpdatesOnExitPanelVisible"
}, {
  "docs" : "Use file icons from os in file explorers",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.appwork.utils.swing.dialog.ExtFileSystemViewSettings",
  "type" : "boolean",
  "key" : "UseSystemIcons"
}, {
  "docs" : "max. number of favicon threads",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.faviconcontroller.FavIconsConfig",
  "type" : "int",
  "key" : "MaxThreads"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "jd.controlling.faviconcontroller.FavIconsConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "FailedHosts"
}, {
  "docs" : "max. time in ms before killing an idle favicon thread",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.faviconcontroller.FavIconsConfig",
  "type" : "int",
  "key" : "ThreadKeepAlive"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "jd.controlling.faviconcontroller.FavIconsConfig",
  "type" : "long",
  "key" : "LastRefresh"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.settings.SoundSettings",
  "type" : "int",
  "key" : "CaptchaSoundVolume"
}, {
  "docs" : "Play a Sound when a Captchadialog opens",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.SoundSettings",
  "type" : "boolean",
  "key" : "CaptchaSoundEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentLinkCountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentPackageCountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyOnNewLinkgrabberLinksEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentStatusVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentListQueueVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentDurationVisible"
}, {
  "docs" : "Animation End Y Position. 0 is top screen edge -1 is bottom screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "AnimationEndPositionY"
}, {
  "docs" : "Animation End X Position. 0 is left screen edge -1 is right screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "AnimationEndPositionX"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentAccountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentCheckQueueVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyOnUpdateAvailableEnabled"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "FadeAnimationDuration"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyStartPauseStopEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentProxyVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentAnimatedIconVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentOfflineCountVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyOnCaptchaInBackgroundEnabled"
}, {
  "docs" : "Animation Start Y Position. 0 is top screen edge -1 is bottom screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "AnimationStartPositionY"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentStatusVisible"
}, {
  "docs" : "Animation Start X Position. 0 is left screen edge -1 is right screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "AnimationStartPositionX"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CaptchaExchangeSolverBubbleImageVisible"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig$BubbleNotifyEnabledState",
  "key" : "BubbleNotifyEnabledState"
}, {
  "docs" : "If enabled, all Anchor settings are relative to the JDownloader Window screen of JDownloader is visible on screen.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleAnchorRelativeToWindow"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentFilenameVisible"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "CrawlerBubbleContentOnlineCountVisible"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "DefaultTimeout"
}, {
  "docs" : "X Position of the first bubble. 0 is left screen edge -1 is right screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "FinalPositionX"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentSaveToVisible"
}, {
  "docs" : "Y Position of the first bubble. 0 is top screen edge -1 is bottom screen edge",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "FinalPositionY"
}, {
  "docs" : "The bubbles iuse the current active screen. That means the screen that is used by the Main Window. You can set a hardcoded screen ID here. Like \\Display0 for your main screen",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "java.lang.String",
  "key" : "ScreenID"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig$LINKGRABBER_BUBBLE_NOTIFY_ON",
  "key" : "BubbleNotifyOnNewLinkgrabberLinksOn"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyEnabledDuringSilentMode"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "BubbleNotifyOnNewLinkgrabberLinksEndNotifyDelay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyOnReconnectStartEnabled"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "long",
  "key" : "DownloadStartEndNotifyDelay"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "DownloadStartedBubbleContentHosterVisible"
}, {
  "docs" : "Transparency of the Bubbles. 0 = invisible 100= no Transparency",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "int",
  "key" : "Transparency"
}, {
  "docs" : "Animation Start Anchor. TOP_RIGHT means, that the topright corner of the bubble is the reference anchor",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig$Anchor",
  "key" : "AnimationStartPositionAnchor"
}, {
  "docs" : "Animation End Anchor. TOP_RIGHT means, that the topright corner of the bubble is the reference anchor",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig$Anchor",
  "key" : "AnimationEndPositionAnchor"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "boolean",
  "key" : "BubbleNotifyStartStopDownloadsEnabled"
}, {
  "docs" : "Position Anchor for the First Bubble. TOP_RIGHT means, that the topright corner of the bubble is the reference anchor",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig",
  "type" : "org.jdownloader.gui.notify.gui.BubbleNotifyConfig$Anchor",
  "key" : "FinalPositionAnchor"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "CancelDialogCountdownOnMouseMove"
}, {
  "docs" : "True to enable a countdown in captcha dialogs. Dialog will close automated after the coundown",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "DialogCountdownForDownloadsEnabled"
}, {
  "docs" : "True to enable a countdown in crawler captcha dialogs. Dialog will close automated after the coundown",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "DialogCountdownForCrawlerEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "CancelDialogCountdownOnMouseClick"
}, {
  "docs" : "Do not Change me unless you know 100000% what this value is used for!",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "int",
  "key" : "AutoCaptchaPriorityThreshold"
}, {
  "docs" : "If the CES Bubble Support is enable, the bubble gives the user a chance to cancel the CES usage. This is the timeout for this skip option",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "int",
  "key" : "CaptchaExchangeChanceToSkipBubbleTimeout"
}, {
  "docs" : "If the Dialog Countdown is reached, the link will be skipped. Disable this option to retry instead",
  "abstractType" : "ENUM",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "jd.controlling.captcha.CaptchaSettings$CAPTCHA_TIMEOUT_ACTION",
  "key" : "CaptchaTimeoutAction"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "CancelDialogCountdownOnHateCaptchaClick"
}, {
  "docs" : "Timeout after which a challenge (captcha) invalidates (e.g sessions run out...) this timeout should be set by the plugins",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "int",
  "key" : "DefaultChallengeTimeout"
}, {
  "docs" : "If you change these rules, Captchas might become very hard or even impossible to solve over time. Do NEVER ever change these rules without knowing what you are doing",
  "abstractType" : "OBJECT",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "java.util.HashMap<java.lang.String, java.util.ArrayList<org.jdownloader.captcha.v2.CaptchaQualityEnsuranceRule>>",
  "key" : "QualityEnsuranceRules"
}, {
  "docs" : "MS to wait until captcha dialog gets answered. Close dialog after this timeout unanswered",
  "abstractType" : "INT",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "int",
  "key" : "CaptchaDialogDefaultCountdown"
}, {
  "docs" : "Captcha Mode",
  "abstractType" : "ENUM",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "jd.controlling.captcha.CaptchaSettings$MODE",
  "key" : "CaptchaMode"
}, {
  "docs" : "Enable the CES & Remote Captcha Bubbles",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.captcha.CaptchaSettings",
  "type" : "boolean",
  "key" : "RemoteCaptchaBubbleEnabled"
}, {
  "docs" : "Activate the Silent Mode",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "boolean",
  "key" : "ManualEnabled"
}, {
  "docs" : "Auto Disable the Silent mode on each startup",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "boolean",
  "key" : "AutoResetOnStartupEnabled"
}, {
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "long",
  "key" : "OnDialogDuringSilentModeActionTimeout"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "org.jdownloader.settings.SilentModeSettings$CaptchaDuringSilentModeAction",
  "key" : "OnCaptchaDuringSilentModeAction"
}, {
  "docs" : "[ms] After the given time without user interaction, JDownloader will autoactivate the silent mode, and disable it if there is user interaction again.",
  "abstractType" : "LONG",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "long",
  "key" : "AutoSilentModeInIdleState"
}, {
  "docs" : "Activate Silent Mode Based on Frame Status",
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "org.jdownloader.settings.SilentModeSettings$AutoSilentModeTrigger",
  "key" : "AutoTrigger"
}, {
  "abstractType" : "ENUM",
  "interfaceName" : "org.jdownloader.settings.SilentModeSettings",
  "type" : "org.jdownloader.settings.SilentModeSettings$DialogDuringSilentModeAction",
  "key" : "OnDialogDuringSilentModeAction"
}, {
  "docs" : "Customized Color for the Config Panel Label text(enabled) in the config panels in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ConfigLabelEnabledTextColor"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableSelectedRowsForeground"
}, {
  "docs" : "Customized Color for the Header text in the config panels in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForConfigHeaderTextColor"
}, {
  "docs" : "Enable/disable window opacity on Java 6u10 and above. A value of 'false' disables window opacity which means that the window corner background which is visible for non-rectangular windows disappear. Furthermore the shadow for popupMenus makes use of real translucent window. Some themes like SyntheticaSimple2D support translucent titlePanes if opacity is disabled. The property is ignored on JRE's below 6u10. Note: It is recommended to activate this feature only if your graphics hardware acceleration is supported by the JVM - a value of 'false' can affect application performance. Default value is false which means the translucency feature is enabled",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "WindowOpaque"
}, {
  "docs" : "Increase this value and set ColorForTableRowGap to show a gap between two links. Check CustomTableRowHeight as well",
  "abstractType" : "INT",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "int",
  "key" : "LinkTableHorizontalRowLineWeight"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTablePackageRowBackground"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "Language"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedmeterCurrentBottom"
}, {
  "docs" : "Font to be used. Default value is default. For foreign chars use e.g. Dialog",
  "abstractType" : "STRING",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "FontName"
}, {
  "docs" : "Paint all labels/text with or without antialias. Default value is false.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "SpeedmeterAntiAliasingEnabled"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForPanelBackground"
}, {
  "docs" : "Icon Set ID. Make sure that ./themes/<ID>/ exists",
  "abstractType" : "STRING",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "IconSetID"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedmeterLimiterTop"
}, {
  "docs" : "Show % Letter in the Progressbar if possible",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "ProgressColumnFormatAddPercentEnabled"
}, {
  "docs" : "Enable/disable support for system DPI settings. Default value is true.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "FontRespectsSystemDPI"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedmeterLimiterBottom"
}, {
  "docs" : "Customized Color for the Description text in the config panels in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForConfigPanelDescriptionText"
}, {
  "docs" : "Customized Color for the Table Row gap line in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableRowGap"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTablePackageRowForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedmeterCurrentTop"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableSelectedRowsBackground"
}, {
  "docs" : "Choose the text position in the progress column.",
  "abstractType" : "ENUM",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "org.jdownloader.updatev2.gui.HorizontalPostion",
  "key" : "ProgressColumnTextPosition"
}, {
  "docs" : "Choose the amount of decimal letters for the Progress column. 2->12.34% 1->12.3%",
  "abstractType" : "INT",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "int",
  "key" : "ProgressColumnFractionDigits"
}, {
  "docs" : "Customized Color for the Progressbar 1/5 in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForProgressbarForeground1"
}, {
  "docs" : "The left gap/indent/inset in the config/settings panels",
  "abstractType" : "INT",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "int",
  "key" : "ConfigPanelLeftIndent"
}, {
  "docs" : "Customized Color for the Progressbar 2/5 in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForProgressbarForeground2"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedMeterAverage"
}, {
  "docs" : "Customized Color for the Progressbar 3/5 in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForProgressbarForeground3"
}, {
  "docs" : "Customized Color for the Progressbar 4/5 in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForProgressbarForeground4"
}, {
  "docs" : "Font scale factor in percent. Default value is 100 which means no font scaling.",
  "abstractType" : "INT",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "int",
  "key" : "FontScaleFactor"
}, {
  "docs" : "Customized Color for the Progressbar 5/5 in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForProgressbarForeground5"
}, {
  "docs" : "by default, table row's height dynamicly adapts to the fontsize. Set a value>0 to set your own custom row height.",
  "abstractType" : "INT",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "int",
  "key" : "CustomTableRowHeight"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAlternateRowForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAccountTempErrorRowForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForPanelBorders"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedMeterText"
}, {
  "docs" : "Every  odd row get's a light shadow if enabled",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "TableAlternateRowHighlightEnabled"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAccountErrorRowForeground"
}, {
  "docs" : "Paint all labels/text with or without antialias. Default value is false.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "TextAntiAliasEnabled"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForErrorForeground"
}, {
  "docs" : "Customized Color for the Linkgrabber Dupe Highlight in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForLinkgrabberDupeHighlighter"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableMouseOverRowForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForScrollbarsMouseOverState"
}, {
  "docs" : "Customized Color for the Config Panel Label text(disable) in the config panels in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ConfigLabelDisabledTextColor"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableSortedColumnView"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForPanelHeaderBackground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForPanelHeaderForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableMouseOverRowBackground"
}, {
  "docs" : "Disable animation and all animation threads. Optional value. Default value is true.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "AnimationEnabled"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForScrollbarsNormalState"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableFilteredView"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTooltipForeground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAccountErrorRowBackground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAccountTempErrorRowBackground"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForSpeedMeterAverageText"
}, {
  "docs" : "Customized Color in aRGB Format (Pure red: #ffFF0000)",
  "abstractType" : "HEX_COLOR",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "java.lang.String",
  "key" : "ColorForTableAlternateRowBackground"
}, {
  "docs" : "(JD09 style)Paint the window title bar.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/laf/JDDefaultLookAndFeel",
  "interfaceName" : "org.jdownloader.updatev2.gui.LAFSettings",
  "type" : "boolean",
  "key" : "WindowDecorationEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "ToolTipEnabled"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "org.jdownloader.gui.jdtrayicon.OnMinimizeAction",
  "key" : "OnMinimizeAction"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "org.jdownloader.gui.jdtrayicon.OnCloseAction",
  "key" : "OnCloseAction"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "ToogleWindowStatusWithSingleClickEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "GnomeTrayIconTransparentEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "GreyIconEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "StartMinimizedEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.gui.jdtrayicon.TrayExtension",
  "interfaceName" : "org.jdownloader.gui.jdtrayicon.TrayConfig",
  "type" : "boolean",
  "key" : "TrayOnlyVisibleIfWindowIsHiddenEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.captcha.CaptchaMyJDownloaderRemoteSolverSettings",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.api.captcha.CaptchaMyJDownloaderRemoteSolverSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.api.captcha.CaptchaMyJDownloaderRemoteSolverSettings",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.api.captcha.CaptchaMyJDownloaderRemoteSolverSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.api.captcha.CaptchaMyJDownloaderRemoteSolverSettings",
  "type" : "boolean",
  "key" : "Enabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "java.util.HashMap<java.lang.String, org.jdownloader.captcha.v2.solver.jac.AutoTrust>",
  "key" : "JACThreshold"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Do not Change me unless you know 100000% what this value is used for!",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "int",
  "key" : "DefaultJACTrustThreshold"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.jac.JACSolverConfig",
  "type" : "boolean",
  "key" : "Enabled"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.extensions.antistandby.AntiStandbyExtension",
  "interfaceName" : "org.jdownloader.extensions.antistandby.AntiStandbyConfig",
  "type" : "org.jdownloader.extensions.antistandby.Mode",
  "key" : "Mode"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.antistandby.AntiStandbyExtension",
  "interfaceName" : "org.jdownloader.extensions.antistandby.AntiStandbyConfig",
  "type" : "boolean",
  "key" : "DisplayRequired"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "docs" : "Your deathbycaptcha.eu Password",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "docs" : "Host bound Waittime before using CES. Use CaptchaExchangeChanceToSkipBubbleTimeout for a global timeout",
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.util.HashMap<java.lang.String, java.lang.Integer>",
  "key" : "BubbleTimeoutByHostMap"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Your deathbycaptcha.eu Username",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.dbc.DeathByCaptchaSettings",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "docs" : "Your ImageTyperz.com Password",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Your ImageTyperz.com Username",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.imagetyperz.ImageTyperzConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "docs" : "Your CheapCaptcha.com Password",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Your CheapCaptcha.com Username",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.cheapcaptcha.CheapCaptchaConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "docs" : "Your CaptchaSolutions.com API Secret",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.lang.String",
  "key" : "APISecret"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "docs" : "Your CaptchaSolutions.com Password",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Your CaptchaSolutions.com API Key",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.lang.String",
  "key" : "APIKey"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Your CaptchaSolutions.com Username",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.captchasolutions.CaptchaSolutionsConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Your 2captcha.com apiKey (https://2captcha.com/setting)",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "java.lang.String",
  "key" : "ApiKey"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.twocaptcha.TwoCaptchaConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Your anti-captcha.com apiKey (https://anti-captcha.com/clients/reports/dashboard)",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "java.lang.String",
  "key" : "ApiKey"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.antiCaptchaCom.AntiCaptchaComConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "docs" : "Your EndCaptcha.com Password",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "boolean",
  "key" : "FeedBackSendingEnabled"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Your EndCaptcha.com Username",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.endcaptcha.EndCaptchaConfigInterface",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "docs" : "Captcha blacklist for hoster with prio",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "blacklistprio"
}, {
  "docs" : "Captcha whitelist for hoster with prio",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "whitelistprio"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "Captcha blacklist for hoster with timeout",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "blacklisttimeout"
}, {
  "docs" : "Activate the blacklist with prio",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "blacklistpriocheck"
}, {
  "docs" : "Activate the Captcha Feedback",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "feedback"
}, {
  "docs" : "Activate the Mouse Captchas",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "mouse"
}, {
  "docs" : "Max. Captchas per hour",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "int",
  "key" : "hour"
}, {
  "docs" : "Captcha whitelist for hoster with timeout",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "whitelisttimeout"
}, {
  "docs" : "Activate the whitelist with prio",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "whitelistpriocheck"
}, {
  "docs" : "Activate the blacklist",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "blacklistcheck"
}, {
  "docs" : "Confirm option for mouse captchas (Cost +6)",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "mouseconfirm"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "EnabledGlobally"
}, {
  "docs" : "Only https requests to 9kw.eu",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "https"
}, {
  "docs" : "More priority for captchas (Cost +1-20)",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "int",
  "key" : "prio"
}, {
  "docs" : "Activate the high queue dialog",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "highqueue"
}, {
  "docs" : "Activate the debugmode for 9kw.eu service",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "Debug"
}, {
  "docs" : "Your (User) ApiKey from 9kw.eu",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "ApiKey"
}, {
  "docs" : "Activate the lowcredits dialog",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "lowcredits"
}, {
  "docs" : "Activate the whitelist",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "whitelistcheck"
}, {
  "docs" : "Captcha blacklist for hoster",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "blacklist"
}, {
  "docs" : "Captcha whitelist for hoster",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "whitelist"
}, {
  "docs" : "Activate the whitelist with timeout",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "whitelisttimeoutcheck"
}, {
  "docs" : "Max. Captchas Parallel",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "int",
  "key" : "ThreadpoolSize"
}, {
  "docs" : "Max. Captchas per minute",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "int",
  "key" : "minute"
}, {
  "docs" : "Confirm option for captchas (Cost +6)",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "confirm"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "docs" : "Activate the Puzzle Captchas",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "puzzle"
}, {
  "docs" : "Host bound Waittime before using CES. Use CaptchaExchangeChanceToSkipBubbleTimeout for a global timeout",
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.util.HashMap<java.lang.String, java.lang.Integer>",
  "key" : "BubbleTimeoutByHostMap"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "docs" : "Hosteroptions for 9kw.eu",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "java.lang.String",
  "key" : "hosteroptions"
}, {
  "docs" : "Activate the blacklist with timeout",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "blacklisttimeoutcheck"
}, {
  "docs" : "Activate the option selfsolve (sandbox)",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "boolean",
  "key" : "Selfsolve"
}, {
  "docs" : "Default max. Timeout in ms",
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.solver9kw.Captcha9kwSettings",
  "type" : "int",
  "key" : "DefaultMaxTimeout"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.gui.DialogCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.gui.DialogCaptchaSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.gui.DialogCaptchaSolverConfig",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.gui.DialogCaptchaSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.gui.DialogCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "Enabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "AutoClickEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "WhitelistEntries"
}, {
  "docs" : "If enabled, JD will use your default browser to improve the captcha detection.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "BrowserLoopEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "AutoOpenBrowserEnabled"
}, {
  "docs" : "Example: [ \"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe\", \"-app=%s\" ]",
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "BrowserCommandline"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "Enabled"
}, {
  "docs" : "If enabled, JD will use the browserloop even if it is in silentmode",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "BrowserLoopDuringSilentModeEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "boolean",
  "key" : "BlackWhiteListingEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "BlacklistEntries"
}, {
  "abstractType" : "OBJECT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "java.util.Map<java.lang.String, java.lang.Integer>",
  "key" : "WaitForMap"
}, {
  "docs" : "Easier Captchas: Get your current google.com SID and HSID Cookie value from your default browser and enter id here.",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "java.lang.String",
  "key" : "GoogleComCookieValueSID"
}, {
  "abstractType" : "INT",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "int",
  "key" : "LocalHttpPort"
}, {
  "docs" : "Easier Captchas: Get your current google.com SID and HSID Cookie value from your default browser and enter id here.",
  "abstractType" : "STRING",
  "interfaceName" : "org.jdownloader.captcha.v2.solver.browser.BrowserCaptchaSolverConfig",
  "type" : "java.lang.String",
  "key" : "GoogleComCookieValueHSID"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.eventscripter.EventScripterExtension",
  "interfaceName" : "org.jdownloader.extensions.eventscripter.EventScripterConfig",
  "type" : "boolean",
  "key" : "APIPanelVisible"
}, {
  "abstractType" : "OBJECT_LIST",
  "storage" : "cfg/org.jdownloader.extensions.eventscripter.EventScripterExtension",
  "interfaceName" : "org.jdownloader.extensions.eventscripter.EventScripterConfig",
  "type" : "java.util.ArrayList<org.jdownloader.extensions.eventscripter.ScriptEntry>",
  "key" : "Scripts"
}, {
  "docs" : "A list of regular expressions. Use to avoid extracting certain filetypes.",
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "BlacklistPatterns"
}, {
  "docs" : "Delete archives after successful extraction?",
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "org.jdownloader.controlling.FileCreationManager$DeleteOption",
  "key" : "DeleteArchiveFilesAfterExtractionAction"
}, {
  "docs" : "Extraction Extension autoextracts sub-archives. If you do not want this, disable this option.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "DeepExtractionEnabled"
}, {
  "docs" : "Info File Extension is able to create Info files for all downloaded files. Extraction Extension can remove these files",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "DeleteInfoFilesAfterExtraction"
}, {
  "docs" : "max bytes the extractor may test for finding correct password when no signature is found",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "int",
  "key" : "MaxCheckedFileSizeDuringOptimizedPasswordFindingInBytes"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "org.jdownloader.settings.IfFileExistsAction",
  "key" : "IfFileExistsAction"
}, {
  "docs" : "Shall Extraction Extension ask you for passwords if the correct password has not been found in password cache?",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "AskForUnknownPasswordsEnabled"
}, {
  "docs" : "Enabled usage of custom extraction paths",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "CustomExtractionPathEnabled"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "java.lang.String",
  "key" : "SubPath"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentArchivenameVisible"
}, {
  "docs" : "Delete archive DownloadLinks after successful extraction?",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "DeleteArchiveDownloadlinksAfterExtraction"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentExtractToFolderVisible"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "java.lang.String",
  "key" : "LastWorkingLibID"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "SubpathEnabled"
}, {
  "docs" : "Use original filedate if possible",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "UseOriginalFileDate"
}, {
  "docs" : "Extract Log files in logs/extraction/...",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "WriteExtractionLogEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentCircleProgressVisible"
}, {
  "docs" : "This option improves password find speed a lot, but may result in finding errors.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "PasswordFindOptimizationEnabled"
}, {
  "docs" : "Show Bubbles for Extration Jobs",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleEnabledIfArchiveExtractionIsInProgress"
}, {
  "docs" : "Restore file permissions if possible",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "RestoreFilePermissions"
}, {
  "docs" : "Only use subfolders if the archive ROOT contains at least *** folders",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "int",
  "key" : "SubPathMinFoldersTreshhold"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentStatusVisible"
}, {
  "docs" : "Absolute path to the folder where all archives should be extracted to",
  "abstractType" : "STRING",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "java.lang.String",
  "key" : "CustomExtractionPath"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "org.jdownloader.extensions.extraction.CPUPriority",
  "key" : "CPUPriority"
}, {
  "docs" : "Only use subfolders if the archive ROOT contains at least *** folders or folders",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "int",
  "key" : "SubPathMinFilesOrFoldersTreshhold"
}, {
  "docs" : "A List of passwords for automatic extraction of password protected archives.",
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "java.util.List<java.lang.String>",
  "key" : "PasswordList"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentDurationVisible"
}, {
  "docs" : "Only use subfolders if the archive ROOT contains at least *** files",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "int",
  "key" : "SubPathMinFilesTreshhold"
}, {
  "docs" : "Set the timeout for the 'Ask for archive password' dialog",
  "abstractType" : "INT",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "int",
  "key" : "AskForPasswordDialogTimeoutInMS"
}, {
  "docs" : "A list of regular expressions. Use to avoid deep extracting.",
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "DeepExtractionBlacklistPatterns"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/org.jdownloader.extensions.extraction.ExtractionExtension",
  "interfaceName" : "org.jdownloader.extensions.extraction.ExtractionConfig",
  "type" : "boolean",
  "key" : "BubbleContentCurrentFileVisible"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.upnp.UPUPReconnectSettings",
  "type" : "java.lang.String",
  "key" : "ServiceType"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.upnp.UPUPReconnectSettings",
  "type" : "boolean",
  "key" : "IPCheckEnabled"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.upnp.UPUPReconnectSettings",
  "type" : "java.lang.String",
  "key" : "ModelName"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.upnp.UPUPReconnectSettings",
  "type" : "java.lang.String",
  "key" : "WANService"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.upnp.UPUPReconnectSettings",
  "type" : "java.lang.String",
  "key" : "ControlURL"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "java.lang.String",
  "key" : "Password"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "boolean",
  "key" : "AutoSearchBestMatchFilterEnabled"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "java.lang.String",
  "key" : "RouterIP"
}, {
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "boolean",
  "key" : "AutoReplaceIPEnabled"
}, {
  "docs" : "If False, we already tried to send this script to the colect server. Will be resetted each time we change reconnect settings.",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "boolean",
  "key" : "AlreadySendToCollectServer3"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "java.lang.String",
  "key" : "Script"
}, {
  "abstractType" : "STRING_LIST",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "[Ljava.lang.String;",
  "key" : "HostWhiteList"
}, {
  "abstractType" : "STRING",
  "interfaceName" : "jd.controlling.reconnect.pluginsinc.liveheader.LiveHeaderReconnectSettings",
  "type" : "java.lang.String",
  "key" : "UserName"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/1fichier.com",
  "interfaceName" : "jd.plugins.hoster.OneFichierCom$OneFichierConfigInterface",
  "type" : "boolean",
  "key" : "PreferReconnectEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/1fichier.com",
  "interfaceName" : "jd.plugins.hoster.OneFichierCom$OneFichierConfigInterface",
  "type" : "boolean",
  "key" : "PreferSSLEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/3sat.de",
  "interfaceName" : "jd.plugins.hoster.DreiSatDe$DreiSatConfigInterface",
  "type" : "boolean",
  "key" : "LoadHighVersionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/3sat.de",
  "interfaceName" : "jd.plugins.hoster.DreiSatDe$DreiSatConfigInterface",
  "type" : "boolean",
  "key" : "LoadLowVersionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/3sat.de",
  "interfaceName" : "jd.plugins.hoster.DreiSatDe$DreiSatConfigInterface",
  "type" : "boolean",
  "key" : "LoadVeryHighVersionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/3sat.de",
  "interfaceName" : "jd.plugins.hoster.DreiSatDe$DreiSatConfigInterface",
  "type" : "boolean",
  "key" : "LoadBestVersionOnlyEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/3sat.de",
  "interfaceName" : "jd.plugins.hoster.DreiSatDe$DreiSatConfigInterface",
  "type" : "boolean",
  "key" : "LoadHDVersionEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/br-online.de",
  "interfaceName" : "jd.plugins.hoster.BrDe$BrDeConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "docs" : "If enabled, the Linkgrabber will offer a zip archive to download folders",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/dropbox.com",
  "interfaceName" : "jd.plugins.hoster.DropboxCom$DropboxConfig",
  "type" : "boolean",
  "key" : "ZipFolderDownloadEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/julesjordan.com",
  "interfaceName" : "jd.plugins.hoster.JulesjordanCom$JulesjordanComConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/offcloud.com",
  "interfaceName" : "jd.plugins.hoster.OffCloudCom$OffCloudComPluginConfigInterface",
  "type" : "boolean",
  "key" : "ClearAllowedIpAddressesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/offcloud.com",
  "interfaceName" : "jd.plugins.hoster.OffCloudCom$OffCloudComPluginConfigInterface",
  "type" : "boolean",
  "key" : "DeleteDownloadHistoryCompleteInstantEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/offcloud.com",
  "interfaceName" : "jd.plugins.hoster.OffCloudCom$OffCloudComPluginConfigInterface",
  "type" : "boolean",
  "key" : "DeleteDownloadHistorySingleLinkEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/offcloud.com",
  "interfaceName" : "jd.plugins.hoster.OffCloudCom$OffCloudComPluginConfigInterface",
  "type" : "boolean",
  "key" : "DeleteDownloadHistoryCompleteCloudEnabled"
}, {
  "docs" : "Wait for Ticket (min)",
  "abstractType" : "INT",
  "storage" : "cfg/plugins/HOSTER/otr.datenkeller.net",
  "interfaceName" : "jd.plugins.hoster.OtrDatenkellerNet$OtrDatenKellerInterface",
  "type" : "int",
  "key" : "WaitForTicket"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/real-debrid.com",
  "interfaceName" : "org.jdownloader.plugins.components.realDebridCom.RealDebridComConfig",
  "type" : "boolean",
  "key" : "IgnoreServerSideChunksNum"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/real-debrid.com",
  "interfaceName" : "org.jdownloader.plugins.components.realDebridCom.RealDebridComConfig",
  "type" : "boolean",
  "key" : "UseSSLForDownload"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/rtbf.be",
  "interfaceName" : "jd.plugins.hoster.RtbfBe$RtbfBeConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/tele5.de",
  "interfaceName" : "jd.plugins.hoster.TeleFiveDe$Tele5DeConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/wdr.de",
  "interfaceName" : "jd.plugins.hoster.WdrDeMediathek$WdrDeConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/youku.com",
  "interfaceName" : "jd.plugins.hoster.YoukuCom$YoukuComConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "docs" : "Disable this if you do not want to use the new DASH Format. This will disable AUDIO only Downloads, and High Quality Video Downloads",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "ExternMultimediaToolUsageEnabled"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "AdvancedVariantNamesEnabled"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "FilenamePattern"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "PackagePattern"
}, {
  "docs" : "If a Variant is not available, JD will try up to * alternatives",
  "abstractType" : "INT",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "int",
  "key" : "AutoAlternativeSearchDepths"
}, {
  "abstractType" : "OBJECT_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.configpanel.YoutubeVariantCollection>",
  "key" : "Collections"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.Projection>",
  "key" : "BlacklistedProjections"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "MetaDataEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "ExtraSubtitles"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderVideoCodec"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.itag.AudioCodec>",
  "key" : "BlacklistedAudioCodecs"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "CustomChunkValueEnabled"
}, {
  "docs" : "ID Pattern for dupe filtering. Tags: *CONTAINER**AUDIO_BITRATE**AUDIO_CODEC**DEMUX**SPATIAL*",
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "VariantNamePatternAudio"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "VideoFilenamePattern"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "AndroidSupportEnabled"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "ImageFilenamePattern"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.variants.VariantGroup>",
  "key" : "BlacklistedGroups"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderFiletype"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.itag.VideoFrameRate>",
  "key" : "BlacklistedVideoFramerates"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "RateBypassEnabled"
}, {
  "docs" : "Preload 200kb and use FFProbe to detect the actual Audio Bitrate.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "DoExtendedAudioBitrateLookupEnabled"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "SubtitleFilenamePattern"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.ArrayList<java.lang.String>",
  "key" : "SubtitleWhiteList"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderAudioBitrate"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "PreferedSubtitleLanguages"
}, {
  "docs" : "If disabled, JD will ignore the Youtube Collections, but create an extra link for every variant",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "CollectionMergingEnabled"
}, {
  "docs" : "sets the CUSTOM 'download from' field to: http://www.youtube.com/watch?v=\" + videoID. Useful for when you don't want courselist / playlist / variant information polluting URL.",
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "SetCustomUrlEnabled"
}, {
  "abstractType" : "INT",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "int",
  "key" : "ChunksCount"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "org.jdownloader.plugins.components.youtube.YoutubeConfig$IfUrlisAPlaylistAction",
  "key" : "LinkIsPlaylistUrlAction"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderResolution"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.itag.AudioBitrate>",
  "key" : "BlacklistedAudioBitrates"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.itag.VideoResolution>",
  "key" : "BlacklistedResolutions"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "FastLinkCheckEnabled"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderVideoFramerate"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "AudioFilenamePattern"
}, {
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "DescriptionFilenamePattern"
}, {
  "docs" : "ID Pattern for dupe filtering. Tags: *CONTAINER**HEIGHT**FPS**AUDIO_CODEC**3D**AUDIO_BITRATE**SPATIAL*",
  "abstractType" : "STRING",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.lang.String",
  "key" : "VariantNamePatternVideo"
}, {
  "abstractType" : "ENUM",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "org.jdownloader.plugins.components.youtube.YoutubeConfig$IfUrlisAVideoAndPlaylistAction",
  "key" : "LinkIsVideoAndPlaylistUrlAction"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrder"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.itag.VideoCodec>",
  "key" : "BlacklistedVideoCodecs"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "SubtitleCopyforEachVideoVariant"
}, {
  "abstractType" : "STRING_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "[Ljava.lang.String;",
  "key" : "QualitySortIdentifierOrderAudioCodec"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "ChooseAlternativeForMassChangeOrAddDialog"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "boolean",
  "key" : "SegmentLoadingEnabled"
}, {
  "abstractType" : "ENUM_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.variants.FileContainer>",
  "key" : "BlacklistedFileContainers"
}, {
  "abstractType" : "OBJECT_LIST",
  "storage" : "cfg/plugins/youtube/Youtube",
  "interfaceName" : "org.jdownloader.plugins.components.youtube.YoutubeConfig",
  "type" : "java.util.List<org.jdownloader.plugins.components.youtube.VariantIDStorable>",
  "key" : "DisabledVariants"
}, {
  "abstractType" : "BOOLEAN",
  "storage" : "cfg/plugins/HOSTER/zdf.de",
  "interfaceName" : "jd.plugins.hoster.ZdfDeMediathek$ZdfmediathekConfigInterface",
  "type" : "boolean",
  "key" : "OnlyBestVideoQualityOfSelectedQualitiesEnabled"
}, {
  "docs" : "Install Extension: Observation de dossier",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "InstallExtensionFOLDERWATCH"
}, {
  "docs" : "Install Extension: Planificateur",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "InstallExtensionSCHEDULER"
}, {
  "docs" : "Install Extension: Info Bar",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "InstallExtensionINFOBAR"
}, {
  "docs" : "Install Extension: Chat du support",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "InstallExtensionCHAT"
}, {
  "docs" : "Install Extension: Traducteur",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "InstallExtensionTRANSLATOR"
}, {
  "docs" : "Enable/Disable Extension: Anti mise en veille",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "EnableAntiStandbyExtension"
}, {
  "docs" : "Enable/Disable Extension: Extracteur d'archives",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "EnableExtractionExtension"
}, {
  "docs" : "Enable/Disable Extension: JD Mise hors tension",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "EnableShutdownExtension"
}, {
  "docs" : "Enable/Disable Extension: Scripts",
  "abstractType" : "BOOLEAN",
  "interfaceName" : "Extension",
  "key" : "EnableEventScripterExtension"
} ]
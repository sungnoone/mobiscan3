cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.manateeworks.barcodescanner/www/MWBScanner.js",
        "id": "com.manateeworks.barcodescanner.Scanner",
        "clobbers": [
            "scanner"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.manateeworks.barcodescanner": "1.1.0",
    "org.apache.cordova.dialogs": "0.2.9-dev"
}
// BOTTOM OF METADATA
});
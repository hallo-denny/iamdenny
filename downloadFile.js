const fs = require('file-system');
const http = require("http");

exports.download = function (args) {
    let data = args.object;

    var androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();

    let url = data.get("url");
    let filename = url.substring(url.lastIndexOf('/') + 1);
    let saveLocation = fs.path.join(androidDownloadsPath, filename);

    http.getFile(url, saveLocation).then(function (file) {
        alert("Successfully downloaded").then(() => { });
    }).catch(function (error) {
        alert("error occurred!").then(() => { });
    });
};
package cz.moonlightmart.app;

import android.app.Activity;
import android.webkit.JavascriptInterface;

/** window.MMAndroid: the installed version (the page compares it with the latest release on GitHub) and the download of a
 *  new version in the browser (only this project's releases). */
public class Bridge {
    private final Activity activity;

    public Bridge(Activity activity) { this.activity = activity; }

    @JavascriptInterface
    public String version() {
        try { return activity.getPackageManager().getPackageInfo(activity.getPackageName(), 0).versionName; }
        catch (Exception e) { return ""; }
    }

    @JavascriptInterface
    public void open(String url) {
        if (url == null || !url.startsWith("https://github.com/tvspk/moonlight-mart/releases/")) return;
        activity.runOnUiThread(new OpenTask(activity, url));
    }
}

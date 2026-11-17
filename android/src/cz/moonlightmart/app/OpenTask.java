package cz.moonlightmart.app;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

/** Opens the download of a new app version in the browser (Bridge.open checks the address). */
public class OpenTask implements Runnable {
    private final Activity activity;
    private final String url;

    public OpenTask(Activity activity, String url) { this.activity = activity; this.url = url; }

    @Override
    public void run() {
        try { activity.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url))); }
        catch (Exception e) { /* no browser */ }
    }
}

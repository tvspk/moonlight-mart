package cz.moonlightmart.app;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.WebSettings;
import android.webkit.WebView;

/** Moonlight Mart: the game page from assets/www in a WebView.
 *  The address file:///android_asset/www/index.html must never change: progress lives in that page's localStorage.
 *  Network: only api.github.com (sync between devices, new-version check). Camera: only for the sync pairing QR code. */
public class MainActivity extends Activity {
    private static final String HOME = "file:///android_asset/www/index.html";
    private WebView web;
    private CameraClient camera;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private PauseTask pauser;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);                  // progress is kept in localStorage, inside the app's private data
        s.setAllowFileAccess(true);                    // as in every version since 1.13 (lesson files and audio next to the page)
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);  // listening rounds play clip after clip
        web.addJavascriptInterface(new Bridge(this), "MMAndroid");
        web.setWebViewClient(new StayHomeClient());
        camera = new CameraClient(this);
        web.setWebChromeClient(camera);
        pauser = new PauseTask(web);
        setContentView(web);
        web.loadUrl(HOME);
    }

    /** Back ends the round / goes back to the game's home screen / closes the sync sheet; it never closes the app (use Home). */
    @Override
    public void onBackPressed() {
        if (web == null) { super.onBackPressed(); return; }
        web.evaluateJavascript("(function(){try{if(document.getElementById('sysheet')&&MM.sync){MM.sync.close();return 1}"
            + "if(MM.G&&MM.G.inRound){MM.G.leave();return 1}if(MM.G&&MM.G.screen!=='home'&&MM.S.cur.tab==='game'){MM.G.screen='home';MM.app.render();return 1}}catch(e){}return 0})()", null);
    }

    @Override
    public void onRequestPermissionsResult(int req, String[] perms, int[] results) {
        if (req == CameraClient.REQ_CAMERA && camera != null) camera.permissionResult();
    }

    /** Leaving the app: save, stop the sound, upload to the other devices at once (MM.sync.leave). Hiding the page
     *  (web.onPause) also tells the page it is hidden; its timers stop only ~20 s later, so the upload can finish. */
    @Override
    protected void onPause() {
        if (web != null) {
            web.evaluateJavascript("try{MM.tallyFlush();MM.saveNow();MM.AM.lesson.pause();MM.AM.track.pause()}catch(e){}"
                + "try{if(MM.sync)MM.sync.leave()}catch(e){}", null);
        }
        super.onPause();
        if (web != null) {
            web.onPause();
            handler.removeCallbacks(pauser);
            handler.postDelayed(pauser, 20000);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) { handler.removeCallbacks(pauser); web.onResume(); web.resumeTimers(); }
    }

    @Override
    protected void onDestroy() {
        handler.removeCallbacks(pauser);
        if (web != null) web.destroy();
        super.onDestroy();
    }
}

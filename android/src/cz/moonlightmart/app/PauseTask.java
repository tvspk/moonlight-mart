package cz.moonlightmart.app;

import android.webkit.WebView;

/** Stops the page's JS timers a while after leaving the app (the sync upload on leaving needs them a little longer). */
public class PauseTask implements Runnable {
    private final WebView web;

    public PauseTask(WebView web) { this.web = web; }

    @Override
    public void run() { web.pauseTimers(); }
}

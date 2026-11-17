package cz.moonlightmart.app;

import android.app.Activity;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;

/** Camera only for scanning the sync pairing QR code: only our own page (file://), only video.
 *  Android's camera permission is asked for when the page first asks for the camera, not at start. */
public class CameraClient extends WebChromeClient {
    static final int REQ_CAMERA = 5;
    private final Activity activity;
    private PermissionRequest pending;   // the page's request, waiting for Android's permission

    public CameraClient(Activity activity) { this.activity = activity; }

    @Override
    public void onPermissionRequest(PermissionRequest request) {
        boolean video = false, other = false;
        for (String r : request.getResources()) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(r)) video = true; else other = true;
        }
        Uri o = request.getOrigin();
        if (!video || other || (o != null && o.getScheme() != null && !"file".equals(o.getScheme()))) { request.deny(); return; }
        if (activity.checkSelfPermission("android.permission.CAMERA") == PackageManager.PERMISSION_GRANTED) {
            request.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
            return;
        }
        if (pending != null) pending.deny();
        pending = request;
        activity.requestPermissions(new String[]{"android.permission.CAMERA"}, REQ_CAMERA);
    }

    @Override
    public void onPermissionRequestCanceled(PermissionRequest request) {
        if (pending == request) pending = null;
    }

    /** Called from MainActivity.onRequestPermissionsResult. */
    void permissionResult() {
        PermissionRequest r = pending; pending = null;
        if (r == null) return;
        if (activity.checkSelfPermission("android.permission.CAMERA") == PackageManager.PERMISSION_GRANTED)
            r.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
        else r.deny();
    }
}

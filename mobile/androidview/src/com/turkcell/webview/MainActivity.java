package com.turkcell.webview;

import android.app.Activity;
import android.app.ProgressDialog;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends Activity {

   @Override
   protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      WebView webview = (WebView) findViewById(R.id.webview);
      webview.getSettings().setJavaScriptEnabled(true);
      webview.loadUrl("https://gelecegiyazanlar.org");
      
      webview.getSettings().setUserAgentString("Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20120716 Firefox/15.0a2");

      final ProgressDialog progress = ProgressDialog.show(this, "Gelece�i Yazanlar", "Y�kleniyor...", true);
      progress.show();
      webview.setWebViewClient(new WebViewClient() {

         @Override
         public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            Toast.makeText(getApplicationContext(), "Sayfa y�klendi", Toast.LENGTH_SHORT).show();
            progress.dismiss();
         }

         public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
            Toast.makeText(getApplicationContext(), "Bir hata olu�tu", Toast.LENGTH_SHORT).show();
            progress.dismiss();
         }
      });

   }

}

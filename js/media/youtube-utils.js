(function initYouTubeUtils(global) {
  function extractYoutubeId(src) {
    var value = String(src || "").trim();
    var m1 = value.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
    if (m1) return m1[1];
    var m2 = value.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);
    if (m2) return m2[1];
    var m3 = value.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);
    if (m3) return m3[1];
    return value.length >= 6 ? value : "";
  }

  function ensureYouTubeAPI(timeoutMs) {
    var timeout = Number(timeoutMs) || 10000;
    return new Promise(function (resolve, reject) {
      if (global.YT && global.YT.Player) return resolve();

      var started = Date.now();
      var pollId = null;
      function cleanup() {
        if (pollId) clearInterval(pollId);
      }
      function fail() {
        cleanup();
        reject(new Error("YouTube API timeout"));
      }

      pollId = setInterval(function () {
        if (global.YT && global.YT.Player) {
          cleanup();
          resolve();
          return;
        }
        if (Date.now() - started > timeout) fail();
      }, 120);

      if (global.__ytApiLoading) return;
      global.__ytApiLoading = true;
      global.onYouTubeIframeAPIReady = function () {
        cleanup();
        resolve();
      };
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = fail;
      document.head.appendChild(tag);
    });
  }

  global.YouTubeUtils = {
    extractYoutubeId: extractYoutubeId,
    ensureYouTubeAPI: ensureYouTubeAPI
  };
})(window);

(async () => {
  "use strict";

  // URLチェック
  if (
    !/^https:\/\/.+\.(kintone.com|cybozu.com|cybozu.cn)\/k\//.test(
      location.href
    )
  ) {
    window.alert("This bookmarklet does not work on this site.");
    return;
  }
})();

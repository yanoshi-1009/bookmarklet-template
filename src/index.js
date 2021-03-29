(() => {
  "use strict";

  // URLチェック
  if (!/^https:\/\/.+\.cybozu\.com/.test(location.href)) {
    window.alert("このサイトでは実行できません。");
    return;
  }

  const hoge;
})();

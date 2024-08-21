(async () => {
  "use strict";

  const checkURL = () => {
    if (
      !/^https:\/\/.+\.(kintone.com|cybozu.com|cybozu.cn)\/k\//.test(
        location.href
      )
    ) {
      window.alert("This bookmarklet does not work on this site.");
      return false;
    }
    return true;
  };

  const loadCDN = async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve();
      };
      document.head.appendChild(script);
    });
  };

  const downloadFile = (blob, fileName, fileExtension) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName}.${fileExtension}`;
    a.click();
  };

  // Main
  if (!checkURL()) return;

  location.reload();
})();

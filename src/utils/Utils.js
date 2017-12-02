module.exports = {
  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  _isLoggedIn() {
    return window.localStorage.getItem("readhuntToken");
  },
  _token() {
    return window.localStorage.getItem("readhuntToken");
  },
  _logout() {
    window.localStorage.removeItem("readhuntToken");
    module.exports._deleteUserId();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  },
  _saveUserId(userId: string) {
    window.localStorage.setItem("readhuntUserId", userId);
  },
  _deleteUserId() {
    window.localStorage.removeItem("readhuntUserId");
  },
  _getUserId() {
    return window.localStorage.getItem("readhuntUserId");
  },
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + "" + s4() + "" + s4() + "" + s4();
  },
  _refreshPage() {
    window.location.reload();
  },
  generateToken() {
    //return crypto.randomBytes(20).toString("hex")
    return module.exports.guid();
  },
  generateExpiration() {
    const now = new Date();
    return new Date(now.getTime() + 3600000).toISOString();
  },
  getUrlParam(name, url) {
    if (!url) url = window.location.href;
    //name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(url);
    return results == null ? null : results[1];
  },
  _removeAccents(str: string) {
    let accents =
      "ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    let accentsOut =
      "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    str = str.split("");
    str.forEach((letter, index) => {
      let i = accents.indexOf(letter);
      if (i !== -1) {
        str[index] = accentsOut[i];
      }
    });
    return str.join("");
  }
};

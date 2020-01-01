// import IO from "../util/IO";

class SharedPref {
  constructor() {
    this.SHARED_PREF_FILE_PATH = "../.shared_pref.json";
    this.sharedPref = "";
    this.readSharedPref();
    // IO.readFile(this.SHARED_PREF_FILE_PATH);
  }

  readSharedPref() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", this.SHARED_PREF_FILE_PATH, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          this.sharedPref = rawFile.responseText;
          console.log(this.sharedPref);
        }
      }
    };
    rawFile.send();
  }

  getLanguageCode() {
    return JSON.parse(this.sharedPref).language;
  }
}

export default SharedPref;

class IO {
  static readFile(filePath) {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", filePath, false);
    httpReq.onreadystatechange = () => {
      if (httpReq.readyState === 4) {
        if (httpReq.status === 200 || httpReq.status == 0) {
          let content = httpReq.responseText;
          console.log("in read file content:", content);

          return content;
        }
      }
    };
    httpReq.send();
  }
}

export default IO;

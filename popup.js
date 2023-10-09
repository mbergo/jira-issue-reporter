document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://revvy-modeln.atlassian.net/rest/api/2/search?jql=reporter=currentuser()", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      var issueList = document.getElementById('issueList');
      resp.issues.forEach(function(issue) {
        var div = document.createElement('div');
        div.textContent = issue.key + ': ' + issue.fields.summary;
        issueList.appendChild(div);
      });
    }
  }
  xhr.send();
}, false);

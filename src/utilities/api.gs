function sendToSupabase(topic, name, author) {
  var url = "YOUR_SUPABASE_API_ENDPOINT";
  var headers = {
    "apikey": "YOUR_SUPABASE_API_KEY",
    "Content-Type": "application/json"
  };
  var payload = {
    "topic": topic,
    "name": name,
    "author": author
  };
  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}
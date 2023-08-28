function migrateData(column, table, supabaseColumn, apiKey) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange(column + "2:" + column + sheet.getLastRow());
  var data = range.getValues();

  for (var i = 0; i < data.length; i++) {
    if (data[i][0]) {
      sendToSupabase(data[i][0], table, supabaseColumn, apiKey);
    }
  }
}

function sendToSupabase(value, table, column, apiKey) {
  var API_URL = "https://uipxmbnthbibbjfgfvep.supabase.co/" + table;
  var HEADERS = {
    "apikey": apiKey,
    "Content-Type": "application/json"
  };

  var data = {};
  data[column] = value;

  var options = {
    "method" : "post",
    "headers" : HEADERS,
    "payload" : JSON.stringify(data)
  };
  
  try {
    var response = UrlFetchApp.fetch(API_URL, options);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}

function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var topic = sheet.getName();
  var range = e.range;
  var row = range.getRow();
  var name = sheet.getRange(row, 1).getValue();
  var author = sheet.getRange(row, 2).getValue();
  
  // Send to Supabase
  sendToSupabase(topic, name, author);
}

function copyToDatabase() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = sheet.getSheets();
  
  for(var i = 0; i < sheets.length; i++) {
    var topic = sheets[i].getName();
    var data = sheets[i].getDataRange().getValues();
    
    for(var j = 0; j < data.length; j++) {
      var name = data[j][0];
      var author = data[j][1];
      
      // Send to Supabase
      sendToSupabase(topic, name, author);
    }
  }
}
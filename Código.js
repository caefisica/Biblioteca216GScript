function onOpen() {
  try {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Migración v2')
        .addItem('Iniciar Migración', 'showDialog')
        .addToUi();
  } catch (e) {
    Logger.log(e.toString());
  }
}

function showDialog() {
    var html = HtmlService.createHtmlOutputFromFile('Page')
        .setWidth(500)
        .setHeight(350);
    SpreadsheetApp.getUi().showModalDialog(html, 'Migration Tool');
}

function getColumnNames() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  return headers[0];
}

function getApiKey() {
  return PropertiesService.getUserProperties().getProperty('API_KEY') || '';
}

function saveApiKey(apiKey) {
  PropertiesService.getUserProperties().setProperty('API_KEY', apiKey);
}

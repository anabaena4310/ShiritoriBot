var ACCESS_TOKEN = '《access token》';
var sheet = SpreadsheetApp.getActiveSheet();
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var TEXT_MESSAGE = '';
var DefeatDetermination = Math.floor(Math.random() * 20);

function doPost(e) {
  // WebHookで受信した応答用Token
  var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
  // ユーザーのメッセージを取得
  var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
  // 応答メッセージ用のAPI URL
  var url = 'https://api.line.me/v2/bot/message/reply';

  for(var i = 2; i <= lastRow; i++) {
    if(userMessage.slice(-1) == 'ん') {
      TEXT_MESSAGE = 'んがつきましたよっ。私の勝ちですね！　次も勝ちますよ〜　しりとりの「り」です！'
    } else if(DefeatDetermination == 2) {
      for(var i = 2; i <= lastRow; i++) {
        if(userMessage.slice(-1) == sheet.getRange(i, 1).getValue()) {
          TEXT_MESSAGE = sheet.getRange(i, 2).getValue() + ' ・・・ああっ、「ん」がついてしまいました・・・。私の負けです・・・。　次は勝ちますよ〜　しりとりの「り」です！'
        }
      }
    } else if(userMessage.slice(-1)
     .replace(/が/g, 'か')
     .replace(/ぎ/g, 'き')
     .replace(/ぐ/g, 'く')
     .replace(/げ/g, 'け')
     .replace(/ご/g, 'こ')
     .replace(/ざ/g, 'さ')
     .replace(/じ/g, 'し')
     .replace(/ず/g, 'す')
     .replace(/ぜ/g, 'せ')
     .replace(/ぞ/g, 'そ')
     .replace(/だ/g, 'た')
     .replace(/ぢ/g, 'ち')
     .replace(/づ/g, 'つ')
     .replace(/で/g, 'て')
     .replace(/ど/g, 'と')
     .replace(/ば/g, 'は')
     .replace(/び/g, 'ひ')
     .replace(/ぶ/g, 'ふ')
     .replace(/べ/g, 'へ')
     .replace(/ぼ/g, 'ほ')
     == sheet.getRange(i, 1).getValue()) {
    var row = Math.ceil(Math.random() * (lastColumn-2)) + 2;
    TEXT_MESSAGE = sheet.getRange(i, row).getValue()
  }
}

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': TEXT_MESSAGE,
      }],
    }),
    });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

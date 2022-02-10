function hyoji() { 
//表示する文字
var str1 = "一文字ずつ表示します。"; 
//テキストボックスの文字数
var cnt1 = document.timer1.moji1.value.length; 
//文字が全部表示されているか確認
if ( cnt1 < 11 ) { 
//現在より1文字多く切り出して表示
document.timer1.moji1.value = str1.substr(0,cnt1+1); }
else { 
//全て表示されたら、空文字に戻す
document.timer1.moji1.value= ""; }
//setTimeout()を含む関数を呼び出す
setTimeout("hyoji()",1000); }

function startfnc() { 
//表示する文字
var str = "一文字ずつ表示します。"; 
//テキストボックスの文字数
var cnt = document.timer.moji.value.length; 
//文字が全部表示されているか確認
if ( cnt < 11 ) { 
//現在より1文字多く切り出して表示
document.timer.moji.value = str.substr(0,cnt+1); }
else { 
//全て表示されたら、空文字に戻す
document.timer.moji.value= ""; }
//setTimeout()を含む関数を呼び出す
setTimeout("startfnc()",1000); }

        

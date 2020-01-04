// キーボードの入力状態を記録する配列の定義
var input_key_buffer = new Array();

// キーボードの入力イベントをトリガーに配列のフラグ値を更新させる
window.addEventListener("keydown", handleKeydown);
function handleKeydown(e) {
  console.log("key down : " + e.keyCode);
  input_key_buffer[e.keyCode] = true;

  if (e.keyCode === 37) {
    alert("左が押されたよ");
  } else if (e.keyCode === 38) {
    alert("上が押されたよ");
  } else if (e.keyCode === 39) {
    alert("右が押されたよ");
  } else if (e.keyCode === 40) {
    alert("下が押されたよ");
  }
}

window.addEventListener("keyup", handleKeyup);
function handleKeyup(e) {
  console.log("key up : " + e.keyCode);
  input_key_buffer[e.keyCode] = false;

  if (e.keyCode === 37) {
    alert("左がはなされたよ");
  } else if (e.keyCode === 38) {
    alert("上がはなされたよ");
  } else if (e.keyCode === 39) {
    alert("右がはなされたよ");
  } else if (e.keyCode === 40) {
    alert("下がはなされたよ");
  }
}

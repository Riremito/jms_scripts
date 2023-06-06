// ブラックホール生成器 @502040000
// 前提クエストあり、クエストアイテム必須

var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				// テキスト不明
				var text = "どこへ出発しますか？ (テスト)\r\n";
				text += "#L" + 502040100 + "##b#m502040100##k#l\r\n";
				text += "#L" + 502040200 + "##b#m502040200##k#l\r\n";
				text += "#L" + 502040300 + "##b#m502040300##k#l\r\n";
				text += "#L" + 502040400 + "##b#m502040400##k#l\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				cm.warp(selection, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
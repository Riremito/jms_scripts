// プロ
// リエンから港口へ

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// テキスト適当
				var text = "港口に戻りますか？";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(104000000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
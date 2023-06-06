// クン

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB後
				var text = "私は既に引退した船乗りだ。これからは強い冒険者の育成に力を注ぎたいんだ。\r\n";
				// 適当
				text += "#b#m914100000##kに移動しますか？";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(914100000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
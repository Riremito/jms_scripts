// 輝く石

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
				var text = "美しく輝く石だ。何となく神秘的な力が感じられる。";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
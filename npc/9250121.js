// ごみ箱おじさん
// ビジター関連

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// 原文ママ 多分
				var text = "おい!!!何でコインを投げたりするんだ!!!\r\nごみ箱とでも思ってんのか？";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
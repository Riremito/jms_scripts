// ¢®¬@w
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// Å¡ÆÆë¢
				cm.getMap().killMonster(8090000);
				// BBã
				var text = "ô½wÈÍlª`©êÄ¢éûw¾B®¬ÉÍÁÄ¢È¢æ¤¾ªcB\r\n";
				return cm.sendOk(text);
			}
		case 1:
			{
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
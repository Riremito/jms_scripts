// �N��

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��
				var text = "���͊��Ɉ��ނ����D��肾�B���ꂩ��͋����`���҂̈琬�ɗ͂𒍂������񂾁B\r\n";
				// �K��
				text += "#b#m914100000##k�Ɉړ����܂����H";
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
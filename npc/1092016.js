// �P����

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
				var text = "�������P���΂��B���ƂȂ��_��I�ȗ͂���������B";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
// �w�l�V�X�d����

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �������Ȃ�
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
// �J�\��
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�B���p�A�����ĘB���p�t�c�ǂ�����d�v�����A�ł��d�v�Ȃ̂͘B���p�̗��j��S���Ă������̃}�K�e�B�A�Ƃ����̑�ȑ����B�}�K�e�B�A�̗��j�͂��ꂩ�������Ă����Ȃ���΂Ȃ�Ȃ��B�N�ɂ��̗͂����邩�H\r\n";
				return cm.sendSimple(text);
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
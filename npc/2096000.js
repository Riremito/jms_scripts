// ���K�L�^��

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				cm.getMap().killMonster(5090001); // �}�N���T�m�����X�^�[
				// BB��
				var text = "���K�������������K�L�^�\�ł���B�^�ʖڂɗ��K�������������C�����̂ݐ�l�l�`�̓{���Â߂邱�Ƃ��ł���Ƃ����B\r\n";
				
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
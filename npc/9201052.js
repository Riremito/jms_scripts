// �t�H�b�N�X�E�B�b�g
// iTCG

// ��������������

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "�ǂ������񂶂�H\r\n";
				text += "#L" + 0 + "##b����Ȃ��̂����������炿����ƌ��Ăق����āA���Ȃ����K�C�҂��Ǝv�����́B#k#l\r\n";
				text += "#L" + 1 + "##b�������A�Ȃ�ł��Ȃ��ł��B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// iTCG�n�̏���
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
// �ςȌ`�̐Α�
// �X���[�s�[�E�b�h�E��

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				//var text = "�Α��Ɏ���o���Ă݂Ă������N����܂���ł����B\r\n";
				//return cm.sendSimple(text);
				// BB�� �N�G�X�g��
				var text = "�Α��Ɏ���o���Ă݂�ƕs�v�c�Ȍ��ɑS�g���܂�A���ɋz�����܂��悤�Ȋ��o�ɏP���܂����B���̂܂܈ړ����܂����H\r\n";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				var text = "�f�o�b�O���[�h\r\n";
				// cm.getQuestStatus(2052) == 1 || cm.getQuestStatus(2052) == 2
				text += "#L" + 105040310 + "##r#m" + 105040310 + "##k#l\r\n";
				text += "#L" + 105040311 + "##r#m" + 105040311 + "##k#l\r\n";
				// cm.getQuestStatus(2053) == 1 || cm.getQuestStatus(2053) == 2
				text += "#L" + 105040312 + "##r#m" + 105040312 + "##k#l\r\n";
				text += "#L" + 105040313 + "##r#m" + 105040313 + "##k#l\r\n";
				// cm.getQuestStatus(2054) == 1 || cm.getQuestStatus(2054) == 2
				text += "#L" + 105040314 + "##r#m" + 105040314 + "##k#l\r\n";
				text += "#L" + 105040315 + "##r#m" + 105040315 + "##k#l\r\n";
				text += "#L" + 105040316 + "##r#m" + 105040316 + "##k#l\r\n";
				return cm.sendSimple(text);
			}
		case 3:
			{
				var mapid = selection;
				cm.warp(mapid, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
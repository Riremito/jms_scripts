// �P���x��
// �����̓��A����

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�l�Ԃ���Ȃ����B��������������Ă������A�l�Ԃ͈��������Ȃ����B�ɂ��ڂɉ�����Ȃ���Α����A��ȁI\r\n";
				// �f�o�b�O���[�h
				// �傫�����̕�
				text += "#L" + 240040600 + "##r#m" + 240040600 + "##k#l\r\n"
				// ���A�̓���
				text += "#L" + 240050000 + "##r#m" + 240050000 + "##k#l\r\n"
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				cm.warp(mapid, 0);
				// �傫�����̕�
				//cm.warp(240040600, "st00");
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
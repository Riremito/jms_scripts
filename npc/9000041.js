// ��t

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
				var text = "�X�̔��W�̂��߂Ɏg�����t�������Ă��������I�P�s���{�����Ȃ��ɑ傫�ȏj��������͂��ł��I�c�Ə����Ȏ��ŏ�����Ă���B";
				return cm.sendOk(text);
				// ��t�����풆�̏ꍇ�̓��b�Z�[�W��؂�ւ���K�v������
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
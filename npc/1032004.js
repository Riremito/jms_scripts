// ���C�X
// �G���j�A�E��

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
				var text = "�O�֏o�����̂��H�@�h���̂��c���̂��炢�ł�����߂�Ȃ�B��x��������o��ƁA���߂����蒼�����Ƃ������Ƃ͊o�債�Ă���ȁB�ǂ����A�o��̂��H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(101000000, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
// ����Ă��鑜
// �X���[�s�[�E�b�h�E��

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
				var text = "�Α��Ɏ���o���Ă݂�ƕs�v�c�Ȍ��ɑS�g���܂�A���ɋz�����܂��悤�Ȋ��o�ɏP���܂����B���̂܂܃X���[�s�[�E�b�h�ɖ߂�܂����H�H\r\n";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(105040300, 0)
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
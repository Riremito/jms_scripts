// �R�u�V���J���ė���
// �I���̕����ꓹ

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 2) {
			// BB��
			var text = "��m��̌����Ă݂��������������x���ɐ��������Ă����B";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "��m�́A���܂����U���͂Ƒ̗͂����E�ƂŁA���̍őO���ł��̐^���𔭊�����񂾁B��{�U���͂��ƂĂ������E�ƂŁA�����x���̃X�L�����o����΂����Ƌ����͂𔭊����鎖���ł����B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�ǂ������H��m��̌����Ă݂Ȃ����H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				// �E�Ƒ̌��J�b�g�V�[��
				cm.MovieClipIntroUI(true);
				cm.warp(1020100, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
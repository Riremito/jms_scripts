// �n�C���Y
// �I���̕����ꓹ

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 2) {
			// BB��
			var text = "���@�g����̌����Ă݂��������������x���ɐ��������Ă�����B";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "���@�g���́A�ؗ�ȑ������@�ƃO���[�v�ł̐퓬���ɗL���ȗl�X�ȕ⏕���@�������Ă���B�X�ɁA2���]�E�Ȍ�Ɋo���鑮�����@�́A���Α����̓G�ɒv���I�ȃ_���[�W��^������̂��B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�ǂ�����H���@�g����̌����Ă݂Ȃ����H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				// �E�Ƒ̌��J�b�g�V�[��
				cm.MovieClipIntroUI(true);
				cm.warp(1020200, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
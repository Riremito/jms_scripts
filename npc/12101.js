// ���C��

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
				var text = "�����̓��C�v���A�C�����h�̌��֌�#b�A���z�X�g#k���Ă��������Ȓ���B";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// BB��
				var text = "�L�~�A���܂ł����ɂ���́H�@���������s������̂Ȃ炱������D��#b�r�N�g���A�A�C�����h#k�ɍs�������񂾂��ǂ��c�c�F�X�Ƃ���̂�B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�r�N�g���A�A�C�����h�ł͐E�ƂɏA���邻����B��m�ɂȂ�ɂ�#b�y���I��#k���������ȁH�@���̑��͈�ՂƂ������āA���Z���������܂���Ă�񂾂��āB�܁A���������T�E�X�y�����Z���݂����Ȃ��񂾂��ǂ��B���[���A�Ȃ񂩁A���那�B";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
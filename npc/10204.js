// �R�u�V���J���ė���
// �I���̕����ꓹ

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 2) {
			// BB��
			var text = "�C����̌����Ă݂��������������x���ɐ��������āB";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "�C���͍���DEX�c��������STR���d�v�ɂȂ�E�ƂŁA�e�����Ő키�񂾁B�e�c�K���X�����K�[�͑����ʂ̒e�ۂ��g���Č����I�ɍU��������A�o�g���V�b�v���Č����D�ɏ���ċ��͂ȍU�����������鎖���ł���B���c�C���t�@�C�^�[�́A�ϐg���鎖�ŋ��͂ȃX�L�����g����悤�ɂȂ��B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�ǂ��H�C����̌����Ă݂�H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				// �E�Ƒ̌��J�b�g�V�[��
				cm.MovieClipIntroUI(true);
				cm.warp(1020500, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
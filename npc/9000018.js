// �}�`���_

// �l�b�g�J�t�F�p�̕��򂪕K�v

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
				var text = "#b�l�b�g�J�t�F�����p�̂��Ȃ��ւ̃T�[�r�X�I#k\r\n";
				text += "���݂��g�p���̕���ɕs���͂���܂��񂩁H�U���͂�����Ȃ��Ǝv���Ă��܂��񂩁H#b�l�N�\�����F�l�b�g�J�t�F#k�ł̂݊y���߂镐��ݗ^�T�[�r�X���J�n���܂����I";
				return cm.sendSimple(text);
			}
		case 1:
			{
				var text = "���ʂ̕���ł���Ƃ������肷��ɂ͂܂������ł��I���������������Ɖ������Ă���̂Ń��������N��̋������̌��ł��܂��I#b�l�b�g�J�t�F#k�ł̂݊y���߂�����̓��T�ł��I \r\n";
				text += "#r�A���A���O�A�E�g�Ɠ����ɑݗ^��������͎����ɏ����܂��̂ł��Q�l���������B#k";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
// �w���i
// �I���̕����ꓹ

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 2) {
			// BB��
			var text = "�|�g����̌����Ă݂��������������x���ɐ��������Ă��������B";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "�|�g����DEX��STR���d�v�ȐE�ƂŁA���̌�񂩂牓�����U����S�����Ă��܂��B�n�`��p�������ɂ������������̂������ł��B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�ǂ��ł����H�|�g����̌����Ă݂܂��񂩁H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				// �E�Ƒ̌��J�b�g�V�[��
				cm.MovieClipIntroUI(true);
				cm.warp(1020300, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
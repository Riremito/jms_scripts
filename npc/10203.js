// �R�u�V���J���ė���
// �I���̕����ꓹ

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 2) {
			// BB��
			var text = "������̌����Ă݂��������������x���ɐ��������Ă����B";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "������LUK�ƁA������x��DEX��STR���d�v�ɂȂ�E�ƂŁA�퓬�ł́A�������P������A�p���B������c����ȃX�L�����g����񂾁B�����@���͂Ɖ�𗦂��������́A�l�X�ȃX�L������g���Đ키���Ƃ��ł���B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�ǂ������H������̌����Ă݂Ȃ����H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				// �E�Ƒ̌��J�b�g�V�[��
				cm.MovieClipIntroUI(true);
				cm.warp(1020400, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
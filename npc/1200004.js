// �v��
// ���G���ւ̑D

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��̃e�L�X�g
				var text = "������r�N�g���A�A�C�����h�𗣂�A��X�̑��ɍs�����肩�H���̑D�ɏ���#b���G��#k�܂ŏ悹�Ă����Ă��邪�c#b����800#k�����K�v���B���G���ɍs�������H�s���̂ɂ����鎞�Ԃ́A��1�����B";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(140020300);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

// �C�t
// �I���r�X�`�P�b�g����

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "���͊e�n��ɍs���D�̃`�P�b�g�𔄂��Ă��܂��B�ǂ̃`�P�b�g���w�����܂����H\r\n";
				text += "#L" + 0 + "##b�r�N�g���A�A�C�����h�̃G���j�A#k#l\r\n";
				text += "#L" + 1 + "##b���f�B�u���A����#k#l\r\n";
				text += "#L" + 2 + "##b���v����#k#l\r\n";
				text += "#L" + 3 + "##b�A���A���g#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// �w���������K�v�Ȃ�L�ڂ���
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

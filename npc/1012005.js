// �N���C
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
				var text = "�N�c�����⎄�̎q������ĂĂ���̂ł͂Ȃ����H���͐����̐��Ɩ��@���g���āA�l�`�ɖ��𐁂����ނ��Ƃɐ��������B�l�X�͂��̂悤�ɖ��𓾂����̎q���B��#b�y�b�g#k�ƌĂ�ł���悤���ˁB�����y�b�g�������Ă���Ȃ牽�ł����ɕ����Ă�����\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// BB��
				var text = "�����m�肽���̂��ˁH\r\n";
				text += "#L" + 0 + "##b�y�b�g���ĉ��H#k#l\r\n";
				text += "#L" + 1 + "##b�y�b�g�͂ǂ�����Ĉ�Ă�́H#k#l\r\n";
				text += "#L" + 2 + "##b�y�b�g�����ʂ́H#k#l\r\n";
				text += "#L" + 3 + "##b�A�N�V�����y�b�g�ɂ��Ēm�肽���I#k#l\r\n";
				text += "#L" + 4 + "##b�y�b�g�̔\�͒l���ړ���������@��m�肽���I#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// �����Ƃ��L�ڂ���
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
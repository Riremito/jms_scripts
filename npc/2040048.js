// �i�i
// �t�����i�r�[�`

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �f�o�b�O���[�h
				if (!cm.haveItem(4031134)) {
					cm.gainItem(4031134, 1);
				}

				// �K��
				var text = "�`�����班�����ꂽ�Ƃ����#b�r�[�`#k�Ƃ������z�I�ȊC�݂�����ƕ��������Ƃ͂��邩�H#b2000����#k�𕥂���#b�t���[�p�X�J�[�h#k�������Ă���Ȃ�A���ł����������ɉ^��ł�邺�B\r\n";
				text += "#L" + 0 + "##b2000����#k����#l\r\n";
				text += "#L" + 1 + "##b�t���[�p�X�J�[�h#k�������Ă���B#l\r\n";
				text += "#L" + 2 + "##b�t���[�p�X�J�[�h#k�Ƃ́H#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				if (selection != 0) {
					return cm.dispose();
				}
				// �K��
				var text = "#b2000����#k�𕥂��ăr�[�`�ɍs���񂾂ȁH�ł��A�����ɂ������X�^�[������炵��������f�����I�ł́A�����o�����������邪�c�������r�[�`�ɍs���̂��H";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				if (cm.haveItem(4031134)) {
					cm.gainItem(4031134, -1);
					cm.saveLocation("FLORINA");
					cm.warp(110000000, 0);
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
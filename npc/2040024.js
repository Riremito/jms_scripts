// ��Ԗڂ̃G�I�X��

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
				if (!cm.haveItem(4001020)) {
					cm.gainItem(4001020, 1);
				}
				var text = "#b�G�I�X�΂̏�#k���g����#b��Ԗڂ̃G�I�X��#k���������ł��܂��B#b��Ԗڂ̃G�I�X��#k������Ƃ���ֈړ����܂����H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				if (cm.haveItem(4001020)) {
					cm.gainItem(4001020, -1);
					cm.warp(221022900, 3);
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

// �I���r�X���@��
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
				if (!cm.haveItem(4001019)) {
					cm.gainItem(4001019, 1);
				}
				var text = "#b���@�΂̏�#k���g����#b�I���r�X���@��#k���������ł��܂��B#b�G���i�X���@��#k������Ƃ���ֈړ����܂����H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				if (cm.haveItem(4001019)) {
					cm.gainItem(4001019, -1);
					cm.warp(200082100, 0);
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
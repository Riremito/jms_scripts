// �p�C�\��
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
				var mapid = cm.getSavedLocation("FLORINA");
				// �e�L�X�g�K��
				var text = "#b#m" + mapid + "##k�ɖ߂�܂����B#k\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = cm.getSavedLocation("FLORINA");
				cm.warp(mapid);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
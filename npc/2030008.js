// �W���N���O��N�G�X�g
// �A�h�r�X

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var mapid = cm.getMapId();
				var text = "�悵�A�N�����͏\���ɂł��������ȁB�ǂ̒i�K�ɒ��킵�Ă݂�񂾁H\r\n";
				text += "#L" + 0 + "##b�z���A�̒����ɍs���B(1�i�K)#k#l\r\n";
				text += "#L" + 1 + "##b�W���N���_���W������T������B(2�i�K)#k#l\r\n";
				text += "#L" + 2 + "##b���B��v������B(3�i�K)#k#l\r\n";
				text += "#L" + 3 + "##b�N�G�X�g�ɑ΂�������𕷂��B#k#l\r\n";
				text += "#L" + 4 + "##b�f�o�b�O���[�h�B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				if (selection == 4) {
					cm.gainItem(4001017, 1);
					var bossmap = cm.getMap(280030000);

					if (cm.getPlayerCount(280030000) <= 0) {
						bossmap.resetFully();
					}

					cm.warp(280030000, 0);
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

/*
function action(mode, type, selection) {
	cm.gainItem(4001017, 1);

	var papuMap = cm.getMap(280030000);

	if (cm.getPlayerCount(280030000) <= 0) { // Papu Map
		papuMap.resetFully();
	}

	cm.warp(280030000, 0);
	cm.dispose();
}
*/
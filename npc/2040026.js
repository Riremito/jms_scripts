// �O�Ԗڂ̃G�I�X��

var map_portal = Array(
	[221022900, 3],
	[221020000, 4]
);

function getPortal(mapid) {
	for (var i = 0; i < map_portal; i++) {
		if (mapid == map_portal[i][0]) {
			return map_portal[i][1];
		}
	}
	return 0;
}

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
				var text = "#b�G�I�X�΂̏�#k���g����#b�O�Ԗڂ̃G�I�X��#k���������ł��܂��B�ǂ̐΂ֈړ����܂����H\r\n";
				text += "#L" + 221022900 + "##b��Ԗڂ̃G�I�X��(100�K)#k#l\r\n";
				text += "#L" + 221020000 + "##b�l�Ԗڂ̃G�I�X��(41�K)#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				if (cm.haveItem(4001020)) {
					cm.gainItem(4001020, -1);
					cm.warp(mapid, getPortal(mapid));
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
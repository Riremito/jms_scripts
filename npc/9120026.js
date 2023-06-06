// �N���X�^�� ��������

var warp_map = Array(
	[802000200, "st00", "#b���� - 2100�N �g�E�L���E�����#k"],
	[802000300, "st00", "#b���� - 2095�N �g�E�L���E����#k"],
	[802000500, "st00", "#b���� - 2102�N �g�E�L���E�H�t��#k"],
	[802000600, "st00", "#b���� - 2102�N �g�E�L���E���#k"],
	[802000700, "st00", "#b���� - 2102�N �g�E�L���E�a�J#k"],
	[802000800, "st00", "#b���� - 2102�N �g�E�L���E�Z�{�؃��[���ŏ�w#k"],
	[800040000, "st00", "#b�ߋ� - ����@�V���ו�#k"],
	[910000000, "out00", "#b�f�o�b�O - #m910000000##k"]
);

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
				var text = "���̓A�[�V�A�l�̗͂𑝕�������ҁB�^�C�����[�v�̋����A�[�V�A�l��艺��Ă���΁A�ߋ��▢���̃W�p���O�ɔ�΂��Ă����悤�B\r\n";
				for (var i = 0; i < warp_map.length; i++) {
					text += "#L" + warp_map[i][0] + "#" + warp_map[i][2] + "#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				for (var i = 0; i < warp_map.length; i++) {
					if (warp_map[i][0] == mapid) {
						// debug
						if (!cm.haveItem(5252002)) {
							// �����ɂ�������K�}�K�G���̍��z
							cm.gainItem(5252002, 1);
						}
						cm.warp(warp_map[i][0], warp_map[i][1]);
						return cm.dispose();
					}
				}
				break;
			}
		default:
			break;
	}

	return cm.dispose();
}
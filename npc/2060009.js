// �C���J

var spawn_portal = Array(
	[230000000, "market00"],
	[230030200, "east00"],
	[251000100, "out00"],
	[923020000, "sp"]
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
				/*
				var text = "���E�̑S�Ă̊C�͌q�����Ă��܂��B�����Ă͉����Ƃ���ł��C�ł����΋߂��Ȃ��ł��B#b�C���J�^�N�V�[#k�ɏ���Ĉړ����܂����B\r\n";
				text += "#L" + 0 + "##b�C���J�^�N�V�[�`�P�b�g#k���g�p����#m230030200#�Ɉړ�����#l"
				text += "#L" + 1 + "#10000 �����𕥂��A#m251000100#�Ɉړ�����B#l"
				*/
				var mapid = cm.getMapId();
				var text = "���̒��̑S�Ă̊C�͌q�����Ă��܂��B�����Ɖ������ł��C�Ȃ炷���ł���B�ǂ��ł����H#b�C���J�^�N�V�[#k�ɏ���Ĉړ����܂����H\r\n";
				if (mapid == 230000000) {
					text += "#L" + 230030200 + "##b#m230030200#�ɍs���B#k#l\r\n"
					// 251000100
					text += "#L" + 251000100 + "##b#m251000000#�ɍs���B#k#l\r\n"
					text += "#L" + 923020000 + "##b���̊C�ɍs���B#k#l\r\n"
					return cm.sendSimple(text);
				}
				if (mapid == 251000100) {
					text += "#L" + 230000000 + "##b#m230000000#�ɍs���B#k#l\r\n"
					// 251000100
					text += "#L" + 923020000 + "##b���̊C�ɍs���B#k#l\r\n"
					return cm.sendSimple(text);
				}
				// �f�o�b�O���[�h
				text += "#L" + 230000000 + "##b#m230000000#�ɍs���B#k#l\r\n"
				text += "#L" + 230030200 + "##b#m230030200#�ɍs���B#k#l\r\n"
				text += "#L" + 251000100 + "##b#m251000000#�ɍs���B#k#l\r\n"
				text += "#L" + 923020000 + "##b���̊C�ɍs���B#k#l\r\n"

				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				for (var i = 0; i < spawn_portal.length; i++) {
					if (spawn_portal[i][0] == mapid) {
						if (mapid == 923020000) {
							// ���̊C
							cm.saveLocation("MULUNG_TC");
						}
						cm.warp(spawn_portal[i][0], spawn_portal[i][1]);
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
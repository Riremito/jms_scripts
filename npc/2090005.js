// �c�m�[��
// �I���r�X���烊�v���Ȃ�

var spawn_portal = Array(
	[200000100, 0], // �I���r�X�`�P�b�g����
	[250000100, "sp"], // ���ː_��
	[251000000, 0] // ������
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
				var text = "���b�Z�[�W������\r\n";
				// ����
				if (mapid == 250000100) {
					text += "#L" + 200000100 + "##b#m200000100#�ɍs���B#k#l\r\n"
					text += "#L" + 251000000 + "##b#m251000000#�ɍs���B#k#l\r\n"
					return cm.sendSimple(text);
				}
				// ������
				if (mapid == 251000000) {
					text = "�ǂ������I�@��y��#b#m250000000##k�։������Ă���Ǎ��̒߂ł��[��I��#m250000000#�ɏo���������ł��[�邩�H#b500 ����#k�ł������[��B";
					// Yes No�ɏC���\��
					text += "#L" + 250000100 + "##b#m250000100#�ɍs���B#k#l\r\n"
					return cm.sendSimple(text);
				}
				// �I���r�X
				if (mapid == 200000141) {
					text = "�ǂ������I�@��y��#b#m250000000##k�։������Ă���Ǎ��̒߂ł��[��I��#m250000000#�ɏo���������ł��[�邩�H\r\n";
					text += "#L" + 250000100 + "##b#m250000000#(1500 ����)#k#l\r\n"
					return cm.sendSimple(text);
				}
				// �f�o�b�O���[�h
				text = "�f�o�b�O���[�h\r\n";
				text += "#L" + 250000100 + "##b#m250000000#(1500 ����)#k#l\r\n"
				text += "#L" + 250000100 + "##b#m250000100#�ɍs���B#k#l\r\n"

				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				for (var i = 0; i < spawn_portal.length; i++) {
					if (spawn_portal[i][0] == mapid) {
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
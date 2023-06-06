var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (cm.getMapId() == 803000505  || cm.getMapId() == 910000000) {
		switch (status) {
			case 0:
				{
					var text = "�����c��������񂾁H\r\n";
					text += "#L" + 1 + "##b" + "�_���W��������i��Փx�F�m�[�}���E�������p�j" + "#l#k\r\n";
					text += "#L" + 2 + "##b" + "�_���W��������i��Փx�F�n�[�h�E�������p�j" + "#l#k\r\n";
					text += "#L" + 3 + "##b" + "�{�X�����X�^�[�ΐ�i�\���j" + "#l#k\r\n";
					text += "#L" + 4 + "##b" + "�{�X�����X�^�[�ΐ�i�O���[�v�j" + "#l#k\r\n";
					text += "#L" + 5 + "##b" + "�t���}������" + "#l#k\r\n";
					cm.sendSimple(text);
					return;
				}
			case 1:
				{
					if (selection == 3) {
						cm.sendYesNo("�N�����]���E�b�h�̐��n�ɖ���G�ƈ�l�Ő���Ă݂邩�H");
						return;
					}
					else if (selection == 5) {
						cm.warp(910000000, "out00");
					}
					else {
						cm.sendOk("�{�X�����X�^�[�ΐ�i�\���j��I�����Ă�������");
					}
					break;
				}
			case 2:
				{
					var bossmap = cm.getMap(803100000);
					if (cm.getPlayerCount(803100000) <= 0) {
						bossmap.resetFully();
					}
					cm.warp(803100000, "sp");
					break;
				}
			default:
				break;
		}
	}
	else {
		var id = cm.getNpc();
		var mapid = cm.getMapId();
		var text = "�f�o�b�O���\r\n";
		text += "#p" + id + "#\r\n";
		text += "NPC ID = #b" + id + "#k\r\n";
		text += "#m" + mapid + "#\r\n";
		text += "Map ID = #b" + mapid + "#k\r\n";
	
		cm.sendOk(text);
	}

	cm.dispose();
}
// �L���T���� �e�X
var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	var mapid = cm.getMapId();

	switch (status) {
		case 0:
			{
				cm.sendYesNo("�p�`���R���ֈړ����܂����H");
				return;
			}
		case 1:
			{
				cm.saveLocation("MULUNG_TC");
				cm.warp(809030000, "out00");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
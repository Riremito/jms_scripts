// �ʕ����g���z��

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
				cm.sendYesNo("�ޏo���܂����H");
				return;
			}
		case 1:
			{
				cm.warp(741020100);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
// OS4������ �ړ��悩��ޏo

var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				cm.sendYesNo("�ޏo���܂����H");
				return;
			}
		case 1:
			{
				cm.warp(502010000, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
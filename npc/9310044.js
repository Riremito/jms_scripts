// �|���� �ޏ�
// !spawn 9600025, 9310044
// ���їd�m
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
				cm.sendYesNo("�ޏꂵ�܂����H");
				return;
			}
		case -1:
			{
				//cm.sendOk("...");
				break;
			}
		case 1:
			{
				cm.warp(702070400, 0);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
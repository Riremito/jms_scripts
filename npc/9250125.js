// �h�N�^�[�r��

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
				cm.sendYesNo("�O�֏o�܂����H�i�e�X�g�j");
				return;
			}
		case 1:
			{
				cm.warp(502029000, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
// OS4�V���g�� (���O�~�X?) �ޏo? @OSSS�閧��n�i�[�� 502010000

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
				// �n��������
				cm.warp(502010010, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
// �@�B���u
// �r�V���X�ޏ�
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
				cm.sendYesNo("�l��ʂ��Ĉ��S�ȏꏊ�Ɉړ��ł��܂��B���̂܂܈ړ����܂����H");
				return;
			}
		case 1:
			{
				cm.warp(220080000);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}

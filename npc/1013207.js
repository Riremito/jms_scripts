// �G���@������}�b�v
// �Վ��`

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
		}
		status--;
	}
	if (status == 0) {
		// �K��
		cm.sendYesNo("�`���ɖ߂�܂����H");
	} else if (status == 1) {
		cm.warp(104000000);
		cm.dispose();
	}
}
// �y���[
// �L�m�R�_��

var cost = 1500;
function start() {
	cm.sendYesNo("���������`�`���b�I�I���͂����W�p���O�ƃr�N�g���A�A�C�����h�Ƃ���������y���J�����A�^�����������Ă����΃r�N�g���A�A�C�����h�܂łЂƂ���тōs����B�^���i�Г��j" + cost + "�������������H");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendNext("�G���[���b�Z�[�W");
	} else {
		if (cm.getMeso() >= cost) {
			cm.gainMeso(-cost);
			cm.warp(103000000, "gm02");
		} else {
			cm.sendNext("�G���[���b�Z�[�W");
		}
	}
	cm.dispose();
}
// �y���[
// �J�j���O�V�e�B�[

var cost = 1500;
function start() {
	cm.sendYesNo("���������`�`���b�I�I���͂����W�p���O�ƃr�N�g���A�A�C�����h�Ƃ���������y���J�����A�^�����������Ă����΃W�p���O�܂łЂƂ���тōs����B�^���i�Г��j" + cost + "�������������H");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendNext("�G���[���b�Z�[�W");
	} else {
		if (cm.getMeso() >= cost) {
			cm.gainMeso(-cost);
			cm.warp(800000000, "st00");
		} else {
			cm.sendNext("�G���[���b�Z�[�W");
		}
	}
	cm.dispose();
}
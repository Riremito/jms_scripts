// �s���N�r�[������
// �L���X�g��

function start() {
	var text = "���_�̋���������΁c������x�Í��̖��@�g�����Ăяo�����Ƃ��ł���I�@�c\r\n"
	text += "���A���������c�ǂ����ĈÍ��̖��@�g�����Ăяo���Ȃ��񂾁H�@���̋C�͂Ȃ񂾁H�@�Í��̖��@�g���Ƃ͑S���Ⴄ�c�E���A�A�A�b�I\r\n";
	text += "#b(�L���X�g���̌��Ɏ��������)\r\n";
	cm.askAcceptDecline(text);
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(270050100, 2141000);
		cm.forceStartReactor(270050100, 2709000);
	}

	cm.dispose();
}
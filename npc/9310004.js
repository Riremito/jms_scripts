// �w�l�x���|����
// �O��N�G�X�g ���͂̏ؖ�
// �A�C�e�� ���i�ؖ���

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
				// �O��N�G�X�g�A�C�e���̃`�F�b�N�������K�v
				cm.sendNext("����ɂ��́B���̓|�����Ɛ\���܂��B���̒��͒N���������킯�ł͂���܂��񂪁A�����Ȃ͔閧�C���̐��s���̂悤�ł��ˁB���ɑ��点�܂��̂�#b�x�@���~���I#k�ɉ���Ă݂Ă��������B");
				return;
			}
		case 1:
			{
				// �u���b�N�V�[�v���̗̈�, ���r�яo�Ȃ�
				cm.warp(701010321, 0);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
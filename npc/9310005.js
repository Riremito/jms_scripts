// �x�@���~���I
// �剤���J�f��

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
				// �O��N�G�X�g�̃`�F�b�N�������K�v
				cm.sendNext("�閧�C�����s�̂��߁A�ʘH�ɂ����肵�܂��B");
				return;
			}
		case 1:
			{
				// ������
				// 10���̐������ԕK�v
				cm.warp(701010322, 0);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
// �|���� �{�X

function EnterBossMap(mapid) {
	if (cm.getPlayerCount(mapid) == 0) {
		cm.resetMap(mapid);
	}
	cm.warp(mapid);
}

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
				cm.sendNext("�O���[�v���������Ă��܂��ˁB����ł͂��Ȃ��B���C�s�̊Ԃɑ���܂��B�K�^���F��܂��`");
				return;
			}
		case -1:
			{
				cm.sendOk("�c�O�ł��ˁc�B��Ŏ��Ԃ��ł��܂�����A�����p���������B");
				break;
			}
		case 1:
			{
				EnterBossMap(702060000);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
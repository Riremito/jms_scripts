// �R���y�C
// �{�f�B�[�K�[�h
// Reactor Script 8001000

function GetSpawnItem(itemid) {
	if (cm.haveItem(itemid)) {
		return false;
	}

	cm.gainItem(itemid, 1);
	return true;
}

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
				// ����̋�
				GetSpawnItem(4000138);
				cm.sendYesNo("�����I���O���񂪎����Ă���̂͂����̈���̋�����Ȃ����I�H����ς�I�C���������񂾂Ƃ��肾�����I���O����Ȃ��e���̂��|���邩������˂��B�{�ۂɍU�ߍ��ނ̂��H");
				return;
			}
		case 1:
			{
				cm.sendYesNo("�{���ɓ�������񂾂ȁH���̕����ɒ����͂ł��Ȃ����I����Ƃ��͕����̉��̕󔠂̏�Ɉ���̋���u���Ƃ������ŗ��邩��C������B");
				return;
			}
		case 2:
			{
				// �����̉ʂ�
				EnterBossMap(801040100);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
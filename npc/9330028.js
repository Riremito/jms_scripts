// �����m��
// ��s�ꕪ���ꓹ2 ���� ���� ��
// !npc 9330028
// https://www.youtube.com/watch?v=KcDHzsC1gsk

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

	var mapid = cm.getMapId();

	switch (status) {
		case 0:
			{
				// �O��N�G�X�g ���i�̃e�X�g
				// �N�G�X�g�����{?
				//cm.sendOk("�{���ɉ����|����E���Ȃ��̂����Ȃ����c");
				cm.sendNext("�N�Ȃ牮���|���邾�낤�B�ł́A���䂪����Ƃ���ɑ����Ă����悤�B�C��t���ĂˁI");
				return;
			}
		case 1:
			{
				// 741020101 �����_���ɔ�Ԏd�l?
				EnterBossMap(741020101);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
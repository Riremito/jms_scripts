// �x�@���~�J�[�t�@�C
// ������ ���� �剤���J�f��
// !npc 9310006

function EnterAreaBossMap(mapid, mobid, x, y) {
	var first_user = cm.getPlayerCount(mapid) ? false : true;
	cm.warp(mapid);
	if (first_user) {
		cm.resetMap(mapid);
		//cm.spawnMonster(mobid, x, y);
	}
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

	var mapid = cm.getMapId();

	switch (status) {
		case 0:
			{
				// ���Ƃ��ƌ뎚�H
				cm.sendNext("�剤���J�f��|���ɗ������ł��ˁB�ł́A�C�����s�ɂ��߁A�剤���J�f������Ƃ���ɍs���Ă݂܂��傤�B");
				return;
			}
		case 1:
			{
				// �剤���J�f����������Ȃ�...?
				// ��������10��
				//EnterAreaBossMap(701010323, 5220004, 2160, 823);
				EnterBossMap(701010323);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
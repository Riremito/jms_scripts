// ���N�_
var cost = 1500;
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
				if (mapid != 260020700) {
					cm.sendYesNo("#b���N�_#k�ɏ���ĘB���p�̑�#b�}�K�e�B�A#k�Ɉړ����܂����B��p��" + cost + "�����ł��B");
				}
				else {
					// �e�L�X�g�s��
					cm.sendYesNo("#b���N�_#k�ɏ����#b�A���A���g#k�Ɉړ����܂����B��p��" + cost + "�����ł��B");
				}
				return;
			}
		case -1:
			{
				//cm.sendOk("");
				break;
			}
		case 1:
			{
				if (cm.getMeso() >= cost) {
					cm.gainMeso(-cost);
					if (mapid != 260020700) {
						cm.warp(261000000, 0);
					}
					else {
						cm.warp(260000000, 0);
					}
				} else {
					//cm.sendNext("");
				}
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
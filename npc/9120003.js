// �q�J��
// �K��

var cost = 300;
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
				cm.sendYesNo("�K���ɓ��肽���ł����H�ł́A" + cost + "�����𕥂��Ȃ����B");
				return;
			}
		case -1:
			{
				cm.sendOk("���x���p���Ă��������B");
				break;
			}
		case 1:
			{
				var gender = cm.getPlayerStat("GENDER");
				if (cm.getMeso() >= cost) {
					cm.gainMeso(-cost);
					if (gender == 0) {
						cm.warp(801000100);
					}
					else {
						cm.warp(801000200);
					}
				} else {
					cm.sendOk("���ꗿ" + cost + "�����������Ă��邩�m�F���Ă��������B");
				}
				break;
			}
		default:
			//cm.sendYesNo("mode = " + mode + ", type " + type + ", selection = " + selection + ", status = " + status);
			break;
	}

	cm.dispose();
}
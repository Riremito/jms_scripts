// �p�`���R�ʌ����@
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
				cm.sendYesNo("�p�`���R�ʂ��w�����邽�߂Ƀ|�C���g�V���b�v�֍s���܂����H");
				return;
			}
		case -1:
			{
				cm.sendOk("�܂��̂����p�����҂����Ă���܂��B");
				break;
			}
		case 1:
			{
				cm.getPlayer().EnterPointShop();
				break;
			}
		default:
			//cm.sendYesNo("mode = " + mode + ", type " + type + ", selection = " + selection + ", status = " + status);
			break;
	}

	cm.dispose();
}
// �x�@���n�[�N
// ������ �r���ޏo

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
				var text = "����ɂ��́B�l�̓n�[�N�Ɛ\���܂��B���̗p�ł��傤���B\r\n";
				text += "#L" + 0 + "##b��������o�����ł��B#k#l";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				cm.warp(701010320, 0);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
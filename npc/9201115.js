var status = -1;
var selected = 0;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				var text = "���Ȃ���5�̋��|��ł��j�邱�Ƃ��ł���ƁA�{���Ɏv���܂����H�@�ނ�͂��̌Ñ㉤���̒��ŁA�ł�������m�����Ȃ̂ł��B\r\n";
				text += "#L" + 1 + "##b" + "�͂��I�@�ł��ʂ����Ă݂��܂��I" + "#l#k\r\n";
				text += "#L" + 2 + "##b" + "�������c��������o�����ł��B" + "#l#k\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				selected = selection;
				if (selection == 1) {
					cm.sendNext("����܂����c�ł́A���Ȃ�킢�������ɊJ�n���܂��c�I");
					return;
				}
				else if (selection == 2) {
					cm.sendNext("����܂����B���Ȃ����O�ւƂ����肵�܂��傤�B");
					return;
				}
				break;
			}
		case 2:
			{
				if (selected == 1) {
					// �}�[�K�i���珇�ԂɎ������������
					cm.spawnMonster(9400433, 124, 144);
				}
				else if (selected == 2) {
					cm.warp(803000505, "st00");
				}
				break;
			}
		default:
			break;
	}
	cm.dispose();
}
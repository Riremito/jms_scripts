// ���Z��
// �Z�U�[��

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var mapid = cm.getMapId();
				var text = "���̂悤���H\r\n";
				text += "#L" + 0 + "##b��Ԗړ��Z��(��)#k#l\r\n";
				text += "#L" + 1 + "##b��Ԗړ��Z��(��)#k#l\r\n";
				text += "#L" + 2 + "##b�O�Ԗړ��Z��(��)#k#l\r\n";
				text += "#L" + 3 + "##b���Z���ɂ��Ēm�肽���ł��B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
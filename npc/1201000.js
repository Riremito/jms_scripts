var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��
				var text = "�ǂ����܂������H\r\n";
				text += "#L" + 0 + "##b���Ȃ��Ƙb�������ł��B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				var text = "�������Ȃ��Ƙb�����R������܂����H����Ȃɂ₷�₷�b�͂��܂���B\r\n";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
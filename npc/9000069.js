// �X�Y��
// 7���N
// �e�X�g�p�r

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�e�X�g\r\n";
				text += "#L" + 0 + "##b#k#l\r\n";
				text += "#L" + 1 + "##b#k#l\r\n";
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
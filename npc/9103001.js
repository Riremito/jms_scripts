// �K�C�h����
// ���f�B�u���A�����H����

var npc_talk_status = -1;

// 9103000, 809050015 ���X�g
// 9103002, 809050016 ��V����
// 9103003, 809050017 ��V�Ȃ�

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "������̓��f�B�u���A�����H�̓����ƂȂ�܂��B����y����ł����ĉ������B\r\n";
				text += "#L" + 0 + "##b���f�B�u���A�����H�ɓ���#k#l\r\n";
				text += "#L" + 1 + "##b���f�B�u���A�����H�Ƃ́H#k#l\r\n";
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

// �q�����m�C�hA
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
				var text = "�l�͐l�ԂɂȂ肽���ł��B�g�����S���������l�ԂɁc�����Ȃ����炫���ƁA�ޏ��̎�̒g�����������邱�Ƃ��ł���ł��傤�B�ł��A����͊���ʖ��c�B\r\n";
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
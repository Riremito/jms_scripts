// �y�b�g�̕���
// �d���}��

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "#b�����̐�#k��#b�����̎�����#k��������΂��̐l�`�����Ƃ��ȑO�̂悤�ɓ��������ɂ��邱�Ƃ��ł��邩������܂���A�ǂ��ł��傤�c�A�C�e�����W�߂Ă��܂����H�A�C�e�����������ė��Ă�������������ł��̐l�`�����ǂ���ɂ��Ă����܂���c\r\n";
				return cm.sendYesNo(text);
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
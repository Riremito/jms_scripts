// �V�F�C��
// �G���j�A�E��

var npc_talk_status = 0;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "#b�T�r�g���}#k���痊�܂�Ė򑐂����ɗ��������āH�@�����A�����͕��������󂯂���؂ȏꏊ�Ȃ񂾂�c�B�{���Ȃ�N��������ɂ͂����Ȃ��񂾂��A#r6000#k �������������Θb�͈Ⴄ���B�ǂ����A�����𕥂������H";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				var text = "�f�o�b�O���[�h\r\n";
				// cm.getQuestStatus(2050) == 1
				text += "#L" + 101000100 + "##r#m" + 101000100 + "##k#l\r\n";
				text += "#L" + 101000101 + "##r#m" + 101000101 + "##k#l\r\n";
				// cm.getQuestStatus(2051) == 1
				text += "#L" + 101000102 + "##r#m" + 101000102 + "##k#l\r\n";
				text += "#L" + 101000103 + "##r#m" + 101000103 + "##k#l\r\n";
				text += "#L" + 101000104 + "##r#m" + 101000104 + "##k#l\r\n";
				return cm.sendSimple(text);

			}
		case 3:
			{
				var mapid = selection;
				cm.warp(mapid, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
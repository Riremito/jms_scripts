// �}�C
// �ʏ�͉�b�s��

var mapid_list = Array(
	1010100,
	1010200,
	1010300,
	1010400
);

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��, �����ʂ肾���ǃ}�b�v��������mapid����Ƃ����ق����ǂ�����?
				var text = "��b���ł߂����Ȃ�A�����������Ă���悤���B�ǂ��ŏC������H\r\n";
				// getQuestStatus(1041) == 1
				text += "#b#L0#�`���҂̏C����1#l\r\n";
				// getQuestStatus(1042) == 1
				text += "#b#L1#�`���҂̏C����2#l\r\n";
				// pi.getQuestStatus(1043) == 1
				text += "#b#L2#�`���҂̏C����3#l\r\n";
				// pi.getQuestStatus(1044) == 1
				text += "#b#L3#�`���҂̏C����4#l\r\n";
				return cm.sendSimple(text);
			}
		case 1: {
			cm.warp(mapid_list[selection], 4);
		}
		default:
			break;
	}

	return cm.dispose();
}
// �K�[�h�}��
// �W�F���V�[���b�J�[

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "��ϐ\���󂲂����܂���B���������A�֌W�҈ȊO��������֎~�ł��B����͐��������Ă��������Ă���܂��B\r\n";
				text += "#L" + 0 + "##b����#e#p" + 9120056 + "##n�������`���Ă���Ƃ���Ȃ񂾁B#k#l\r\n"
				// ���A�̓���
				return cm.sendSimple(text);
			}
		case 1:
			{
				// �����}�}
				var text = "#b#p" + 9120056 + "#����#k����`���Ă���#b#h #����#k�ł��ˁB���҂����������܂����B7�A8�K��#b��ʃ]�[��#k�ւ����ꂭ�������B";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// �W�F���V�[���b�J�[
				cm.playPortalSE();
				var mapid = 103040410;
				if (cm.getPlayerCount(mapid) == 0) {
					cm.resetMap(mapid);
				}
				cm.warp(mapid, "right01");
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
// �����V�B���p�t

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
				var text = "���O���̐�ƃt�N���E�̚{��1:1�̔䗦�ō������킹�āc����I�ق̂��Ȍ��̕������邱�Ƃ�Y��Ă��B��ρ`�I����H�����炻���ɂ��܂����H���c�l�����܂�ɂ��d���ɖ����ɂȂ��Ă��ċC�Â��Ă��Ȃ������̂��B����͎��h�B\r\n";
				return cm.sendSimple(text);
			}
		case 2:
			{
				// BB��
				var text = "�����̒ʂ�A�l�͕����V�̘B���p�t�ł��B�܂����n�҂ł����A���Ȃ����K�v�Ȃ��̂����邩������܂���B��x���Ă݂܂����H\r\n";
				text += "#L" + 4006000 + "##b���@�̐΍��#k#l\r\n";
				text += "#L" + 4006001 + "##b�����̐΍��#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// �f�o�b�O���[�h
				var itemid = selection;
				cm.gainItem(itemid, 100);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
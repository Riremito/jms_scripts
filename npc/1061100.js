var npc_talk_status = 0;
var enter_mapid = 105040401;
function action(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 3) {
			npc_talk_status = -1;
			var text = "���z�e���͕ʂ̃T�[�r�X���������܂��̂ŁA������肨�l���ɂȂ��Ă��炲���p�������B";
			return cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "��������Ⴂ�܂��B�X���[�s�[�E�b�h�z�e���ł������܂��B���z�e���͊F�l�ɍō��̃T�[�r�X��񋟂���悤�ɂ����S�����Ă��܂��B�킢�ɔ�ꂽ�Ȃ瓖�z�e���𗘗p���Ă͂������ł��傤���H\r\n";
				return cm.sendSimple(text);
			}
		case 2:
			{
				var text = "���z�e���ɂ�2�̃��[�����������܂��B�ǂ���̃��[���𗘗p���܂����H\r\n";
				text += "#L0##b��ʃT�E�i��(1��F499����)#k#l\r\n";
				text += "#L1##b�����T�E�i�� (1��F999����)#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 3:
			{
				if (selection == 0) {
					enter_mapid = 105040401;
					var text = "��ʃT�E�i���������p�ł��ˁBHP��MP�̉񕜂��ł��āA�F�X�ȃA�C�e���̔������s���܂��B��낵���ł��傤���H";
					return cm.sendYesNo(text);
				}
				enter_mapid = 105040402;
				var text = "�����T�E�i���������p�ł��ˁB��ʃT�E�i����������HP��MP�̉񕜂��ł��āA���ł͓��ʂȃA�C�e���𔃂����Ƃ��ł��܂��B��낵���ł��傤���H";
				return cm.sendYesNo(text);
			}
		case 4: {
			cm.warp(enter_mapid, 0)
			return cm.dispose();
		}
		default:
			break;
	}

	return cm.dispose();
}
// �J�C�W
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
				var text = "���ɂ͂킩��B�N�͎�ɔ��ʂĂĂ���ȁH�l���A�y���݂Ȃ��琶���Ă����̂����̍��E�̖��łȁA����Ӗ��c�������A�ǂ����H�������̃A�C�e����������΃~�j�Q�[�����o����A�C�e���ƌ������Ă�낤�B���Q�[���p�[�N�͒N�ł��E�F���J�����B�����c������`���Ă�낤���H\r\n";
				text += "#L" + 0 + "##b�~�j�Q�[���A�C�e���쐬#k#l\r\n";
				text += "#L" + 1 + "##b�~�j�Q�[���ɑ΂�������𕷂�#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// �����Ƃ��L�ڂ���
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
// �`�R
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "����ɂ��́I���͂��̎��ӂ̃~�j�Q�[���𓝊����Ă���#b#p2040014##k����B�N�A�~�j�Q�[���Ɋ֐S������悤���ȁB �����Ă����悤���B����A��肽�����Ƃ́H\r\n";
				text += "#L" + 0 + "##b�~�j�Q�[���̃A�C�e���쐬#k#l\r\n";
				text += "#L" + 1 + "##b�~�j�Q�[���ɑ΂�������𕷂�#k#l\r\n";
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
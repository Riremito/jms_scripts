// map �J�j���O�V�e�B 103000000
// npc ��������

function start() {
	cm.sendYesNo("���������ăl�b�g�J�t�F����ڑ����Ă�񂶂�Ȃ��̂�?�Ȃ炳�A���ɓ����Ă��Ȃ�B�N�̂悭�m�����ꏊ�ɂ�����͂����B�ǂ����A�������������Ă݂Ȃ���?");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendNext("���͖Z����������?�ł���?���������l�b�g�J�t�F����ڑ����Ă��Ȃ�A���ɓ����Ă݂�΂����̂ɁB�s�v�c�ȏꏊ�ɍs���邩������Ȃ���B");
	} else {
		if (1/*cm.haveItem(5420007)*/) {
			cm.warp(193000000, 0);
		} else {
			cm.sendNext("����A�N�̓l�b�g�J�t�F����ڑ����ĂȂ��݂�������?�����A�����Ȃ璆�ɂ͐�Γ���Ȃ���c�B");
		}
	}
	cm.dispose();
}
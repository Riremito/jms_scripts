// map �l�b�g�J�t�F 193000000
// npc �p�\�R��

function start() {
	var text = "�ڑ�����ꏊ��I��ł��������B\r\n";

	text += "#b#L" + 190000000 + "#�����t�B�[���h#l#k\r\n";
	text += "#b#L" + 191000000 + "#���邢�X�t�B�[���h#l#k\r\n";
	text += "#b#L" + 192000000 + "#�����t�B�[���h#l#k\r\n";
	text += "#b#L" + 195000000 + "#�A���̑��_���W����#l#k\r\n";
	text += "#b#L" + 197000000 + "#���f�B�u���A��#l#k\r\n";
	text += "#b#L" + 196000000 + "#�G���i�X#l#k\r\n";
	text += "#b#L" + 880000000 + "#���������}���g��#l#k\r\n";
	text += "#b#L" + 881000000 + "#����̏W���C��#l#k\r\n";
	//text += "#b#L" + 260010100 + "#�T�{�e���̍���#l#k\r\n";
	cm.sendSimple(text);
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (selection == 197000000) {
			cm.warp(selection, "west00");
		}
		else {
			cm.warp(selection, "out00");
		}
	}
	cm.dispose();
}
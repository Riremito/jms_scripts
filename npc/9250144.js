// �u���b�N�z�[�������� @502040000
// �O��N�G�X�g����A�N�G�X�g�A�C�e���K�{

var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				// �e�L�X�g�s��
				var text = "�ǂ��֏o�����܂����H (�e�X�g)\r\n";
				text += "#L" + 502021010 + "##b#m502021010##k#l\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				cm.warp(selection, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
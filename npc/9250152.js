// OS3A�}�V�[�� �n��������, 502010010
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
				var text = "�s�����I�����Ă��������i�e�X�g�j\r\n";
				// �閧��n�n����
				text += "#L" + 502010100 + "##b#m502010100##l\r\n";
				// OSSS�閧��n�i�[��
				text += "#L" + 502010000 + "##b#m502010000##l\r\n";
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
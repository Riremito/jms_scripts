// OS4�V���g�� @502010000
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
				// VisitorleaveDirectionMode?
				var text = "�ǂ��֏o�����܂����H\r\n";
				// �������F���D�̐[�C
				text += "#L" + 502010200 + "##b�[�C�Ɉړ�����#k#l\r\n";
				// ���΍z���̍z�R
				text += "#L" + 502010300 + "##b�z�R�Ɉړ�����#k#l\r\n";
				// ���H�H��A���H
				text += "#L" + 502010400 + "##b���H�H��ɗA������#k#l\r\n";
				// ���H�H��h��D
				text += "#L" + 502010500 + "##b���H�H��̖h��D�Ɉړ�����#k#l\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				if (selection == 502010500) {
					cm.sendOk("����֎~");
					break;
				}
				cm.warp(selection, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
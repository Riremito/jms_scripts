// �L�m�R�̑�
// https://www.nicovideo.jp/watch/sm5929362

function ItemInfo(itemid) {
	return "#v" + itemid + "##t" + itemid + "#";
}

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
				cm.sendYesNo("�X�m�[�{�[�h�������Ă����̂��H");
				return;
			}
		case 1:
			{
				var text = "�n�������X�m�[�{�[�h�͂ǂꂾ�H�������̂�2�ȏ゠��ꍇ��1�ԍ���ɂ�����̂ɂȂ邩��A�C�������B\r\n";
				text += "#L" + 5 + "##b" + ItemInfo(2031007) + "#l#k\r\n";
				text += "#L" + 6 + "##b" + "���ꂽ������(70%)" + "#l#k\r\n";
				text += "#L" + 7 + "##b" + "���ꂽ������(30%)" + "#l#k\r\n";
				cm.sendSimple(text);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
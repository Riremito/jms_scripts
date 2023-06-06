// �L���T����
var status = -1;
var last_selection = 0;

function ItemInfo(itemid) {
	return "#v" + itemid + "##t" + itemid + "#";
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				switch (last_selection) {
					case 0:
						{
							var text = "��������Ⴂ�܂��B�������p�ł����H\r\n";
							text += "#L" + 1 + "#�p�`���R�i�i��Ⴂ����" + "#l\r\n";
							text += "#L" + 2 + "#�p�`���R�_���W�����ɍs������" + "#l\r\n";
							text += "#L" + 3 + "#�p�`�o�����O�̍��ƌi�i������������" + "#l\r\n";
							text += "#L" + 4 + "#�p�`���R�̒鉤�̏̍��ɂ��ĕ���" + "#l\r\n";
							cm.sendSimple(text);
							return;
						}
					case 2:
						{
							cm.sendNext("�킩������B�܂��ˁB");
							break;
						}
					default:
						break;
				}
			}
		case -1:
			{
				cm.sendNext("XXXX");
				break;
			}
		case 1:
			{
				last_selection = selection;
				switch (selection) {
					case 1:
						{
							cm.sendOk("�i�i����UI");
							break;
						}
					case 2:
						{
							var level = cm.getPlayer().getLevel();
							var text = "���Ȃ��̃��x����" + level + "�ˁB\r\n";
							text += Math.floor(level / 10) + "�_���W�����ɓ��肽���̂�����H\r\n";
							cm.sendYesNo(text);
							return;
						}
					case 3:
						{
							var text = "���[���Ɓc�͂��A�m����#b" + ItemInfo(4001315) + "#k�������Ă����ˁB�ǂ���̃A�C�e�����ܕi�ƌ�������̂�����H\r\n";
							text += "#L" + 5 + "##b" + ItemInfo(2031007) + "#l#k\r\n";
							text += "#L" + 6 + "##b" + "���ꂽ������(70%)" + "#l#k\r\n";
							text += "#L" + 7 + "##b" + "���ꂽ������(30%)" + "#l#k\r\n";

							cm.sendNext(text);
							break;
						}
					case 4:
						{
							var text = "�p�`���R�̒鉤�A�ˁB�Ȃ�đf�G�ȋ���������B\r\n";
							text += "#L" + 5 + "#�p�`���R�̒鉤�Ƃ�?" + "#l\r\n";
							text += "#L" + 6 + "#�����胉���N���m�F����" + "#l\r\n";
							text += "#L" + 7 + "#�p�`���R�̒鉤�̍��ɒ���" + "#l\r\n";

							cm.sendNext(text);
							break;
						}
					default:
						break;
				}
				break;
			}
		case 2:
			{
				if (last_selection == 2) {
					var text = "�p�`���R�_���W�����ɓ���ɂ́A#b" + ItemInfo(4001312) + "#k���K�v��B";
					cm.sendNext(text);
				}
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
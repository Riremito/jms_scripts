// �K�V���|�� �w�l�V�X

var rewards = new Array(
	// �ݒu
	3010013,
	3010058,
	3010091,
	3010087,
	3010089,
	3010088,
	3010090,
	3010098,
	3010020,
	3010174,
	// ETC
	4001396,
	4130012,
	4001010, // �}�}�V���̏����S�� �����̂�2����?
	4001039,
	// ����
	2049002,
	2000019,
	2000004,

	// �e�X�g
	2022025, // �w�l�V�X
	2022027 // �w�l�V�X
);

function RandomRewards() {
	var target = Math.floor(Math.random() * rewards.length);
	return rewards[target];
}

function ShowProb() {
	var text = "�r�o�m��\r\n";

	for (var i = 0; i < rewards.length; i++) {
		text += "#v" + rewards[i] + "##t" + rewards[i] + "# #b(" + Math.floor(1 / rewards.length * 100) + "%)#k\r\n";
	}

	cm.sendOk(text);
}

var status = -1;
var old_selection = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				if (old_selection == -1) {
					var text = "�K�V���|���ł��B\r\n";
					text += "#L" + 1 + "##b" + "�K�V���|���𗘗p�������ł�" + "#l#k\r\n";
					text += "#L" + 0 + "##b" + "�r�o��" + "#l#k\r\n";
					cm.sendSimple(text);
					return;
				}
				break;
			}
		case 1:
			{
				old_selection = selection;
				switch (selection) {
					case 0:
						{
							ShowProb();
							break;
						}
					case 1:
						{
							var ticket = 5220000;
							if (cm.haveItem(ticket)) {
								cm.sendYesNo("�K�V���|�����u���Ă���B#t" + ticket + "#���g���܂����H");
								return;
							}
							else {
								cm.sendNext("�K�V���|�����u���Ă���c");
							}

							break;
						}
					default:
						break;
				}
				break;
			}
		case 2:
			{
				var ticket = 5220000;
				if (cm.haveItem(ticket)) {
					var reward = RandomRewards();
					cm.gainItem(5220000, -1);
					cm.gainItem(reward, 1);
					cm.sendOk("#b#t" + reward + "##k�P���l�����܂����I");
				}
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
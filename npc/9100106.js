// �K�V���|�� �L�m�R�_��

var rewards = new Array(
	// �}���g
	1102040,
	1102041,
	1102042,
	1102084,
	1102085,
	1102086,
	// �X�q
	1002391,
	1002392,
	1002894,
	1002895,
	1002896,
	1002897,
	1002898,
	1002899,
	1002900,
	1002901,
	1002902,
	// ���
	1082002,
	1082145,
	1082146,
	1082147,
	1082148,
	1082149,
	1082150,
	// �C
	1072264,
	// ��
	1022047,
	1022060,
	1022067,
	// ��
	1012056,
	1012135,
	// ����
	1402013,
	1302105,
	1312039,
	1322065,
	1332081,
	1372046,
	1382062,
	1402053,
	1412035,
	1422039,
	1432050,
	1442071,
	1452062,
	1462056,
	1472077,
	1482029,
	1492030,
	// �h��
	1050100,
	1050127,
	1051098,
	1051140,
	// test
	1002972,
	1132004,
	1132040,
	1112439,
	1112412,
	1112400,
	1152001,
	1012132,
	1122007,
	1122069,
	1122085,
	1122000,
	1122076,
	1032062,
	1032084,
	1072344,
	1082223,
	1002751,
	1002788,
	1002844,
	1002668,
	1003112,
	1002574,
	2022025 // �����Ă��W�����{
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
					cm.Gashapon(reward, 1);
					cm.sendOk("#b#t" + reward + "##k�P���l�����܂����I");
				}
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
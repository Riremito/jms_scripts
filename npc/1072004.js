// ��m�]�E����
// ������

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				if (cm.haveItem(4031013, 30)) {
					// ���@�g��
					// var text = "�Ȃ�Ɓc#b#z4031013##k��30�W�߂����I���̎����ł͂Ȃ������̂ɁA�悭�����Ƃ����B���ށB�N�͍��i���B���̏؋���#b#z4031012##k��n�����B���̃A�C�e���������ăG���j�A�ɋA���Ă݂Ȃ����B";
					// �����}�}
					var text = "���I#b#z4031013##k30��S���W�߂��̂��I�悭������I�悵�A�N�͎����ɍ��i���B���̏؋���#b#z4031012##k���������B���̃A�C�e���������ăy���I���ɋA���Ă݂Ȃ����B";
					return cm.sendSimple(text);
				}
			}
		case 1:
			{
				cm.removeAll(4031013);
				cm.gainItem(4031012, 1);
				cm.warp(102020300, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

/*
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.haveItem(4031013, 30)) {
			cm.removeAll(4031013);
			cm.completeQuest(100004);
			cm.startQuest(100005);
			cm.sendOk("You're a true hero! Take this and Dances with Balrog will acknowledge you.");
		} else {
			cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
			cm.dispose();
		}
	} else if (status == 1) {
		cm.gainItem(4031012, 1);
		cm.warp(102020300, 0);
		cm.dispose();
	}
}
*/
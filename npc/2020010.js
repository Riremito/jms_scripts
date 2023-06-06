// ���l
// �|�g��3��

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 1) {
		cm.sendOk("Make up your mind and visit me again.");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (!(cm.getJob() == 310 || cm.getJob() == 320)) {
			cm.sendOk("�W���N���_���W������T�����悤�Ƃ��Ă��ł����H�c�|�g���ł͂Ȃ��悤�ł��ˁH�|�g���łȂ��l�𔻒f����\�͂܂ł͎����Ă��܂���B���Ȃ������ɂ߂邱�Ƃ��ł���E�Ƃ̒��V��K�˂Ă��������B");
			cm.dispose();
			return;
		}
		if ((cm.getJob() == 310 || // HUNTER
			cm.getJob() == 320) && // CROSSBOWMAN
			cm.getPlayerStat("LVL") >= 70 &&
			cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			cm.sendNext("You are indeed a strong one.");
		} else {
			cm.sendOk("Please use all your SP from level 70 and under, and be level 70+...");
			cm.safeDispose();
		}
	} else if (status == 1) {
		if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			if (cm.getJob() == 310) { // HUNTER
				cm.changeJob(311); // RANGER
				cm.gainAp(5);
				cm.sendOk("You are now a #bRanger#k. May #rOdin#k be with you!");
				cm.dispose();
			} else if (cm.getJob() == 320) { // CROSSBOWMAN
				cm.changeJob(321); // SNIPER
				cm.gainAp(5);
				cm.sendOk("You are now a #bSniper#k. May #rOdin#k be with you!");
				cm.dispose();
			}
		} else {
			cm.sendOk("Come back when you are level 70 and used SP.");
			cm.dispose();
		}
	}
}
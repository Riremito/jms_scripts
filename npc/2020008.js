// �^�C���X
// ��m3��

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "���ɉ��̗p�����H\r\n";
				text += "#L" + 0 + "##b3���]�E�������ł��B#k#l\r\n";
				text += "#L" + 1 + "##b�W���N���_���W�����N�G�X�g�������Ă��������B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				if (selection == 0) {
					// �����}�}
					var text = "���ق�A���̗p�Ŏ���K�˂��񂾂��H�ށE�E�E.3���]�E�����A�����Ƌ�����m�ɂȂ肽���̂��B������񎄂̗͂ŌN�����������������Ă����鎖�͂ł��邪�A���̑O�ɌN���ǂ�قǔM�S�ɏC�������̂��ɂ��Č��؂��K�v�Ȃ񂾁B���܂ł����Ƌ����Ȃ肽���Ǝ���K�˂Ă�����҂����͑����������A���ۂɎ����̋������ؖ��ł�����͂��܂肢�Ȃ������B�ǂ������H�����͂Ȃ����낤���N�������Ă����������H";
					return cm.sendYesNo(text);
				}
				return cm.dispose();
			}
		case 2:
			{
				// �����}�}
				var text = "�悵�I�N���ؖ����Ȃ���΂����Ȃ��̂́A �N�̗͂ƒm�b�A���̓���B�܂��A�͂ɂ��Ă̎���������������Ă�����悤�B�N��1���A2���]�E�������Ă��ꂽ�y���I���� #b#p1022000##k���o���Ă��邾�낤�H��K�˂�Ɣނ��N�Ɉ�̔C��������邾�낤�B���̔C���𖳎��Ɋ������A #p1022000#����#b#z4031057##k��������ė��Ă���B";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// �����}�}
				var text = "xxx";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}


/*
var status = 0;
var job;
var skills = Array(21001003, 21000000, 21100002, 21100004, 21100005, 21110002);
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing

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
		if (!(cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {
			if (cm.getQuestStatus(6192) == 1) {
				if (cm.getParty() != null) {
					var ddz = cm.getEventManager("ProtectTylus");
					if (ddz == null) {
						cm.sendOk("Unknown error occured");
					} else {
						var prop = ddz.getProperty("state");
						if (prop == null || prop.equals("0")) {
							ddz.startInstance(cm.getParty(), cm.getMap());
						} else {
							cm.sendOk("Someone else is already trying to protect Tylus, please try again in a bit.");
						}
					}
				} else {
					cm.sendOk("Please form a party in order to protect Tylus!");
				}
			} else if (cm.getQuestStatus(6192) == 2) {
				cm.sendOk("You have protected me. Thank you. I will teach you stance skill.");
				if (cm.getJob() == 112) {
					if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
						cm.teachSkill(1121002, 0, 10);
					}
				} else if (cm.getJob() == 122) {
					if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
						cm.teachSkill(1221002, 0, 10);
					}
				} else if (cm.getJob() == 132) {
					if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
						cm.teachSkill(1321002, 0, 10);
					}
				}
			} else {
				cm.sendOk("�W���N���_���W������T�����悤�Ƃ��Ă�̂��H�����A���Ƃ��Ă͌N�𔻒f���邱�Ƃ��ł��Ȃ��B�N�ɍ����E�Ƃ̒��V��K�˂Ă݂Ă���B");
			}
			cm.dispose();
			return;
		}
		if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) && cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			cm.sendNext("You are indeed a strong one.");
		} else {
			cm.sendOk("Please make sure that you have used all your 2nd job skill point before proceeding.");
			cm.safeDispose();
		}
	} else if (status == 1) {
		if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			if (cm.getJob() == 110) { // FIGHTER
				cm.changeJob(111); // CRUSADER
				cm.gainAp(5);
				cm.sendOk("You are now a #bCrusader#k. May #rOdin#k be with you!");
				cm.dispose();
			} else if (cm.getJob() == 120) { // PAGE
				cm.changeJob(121); // WHITEKNIHT
				cm.gainAp(5);
				cm.sendOk("You are now a #bWhite Knight#k. May #rOdin#k be with you!");
				cm.dispose();
			} else if (cm.getJob() == 130) { // SPEARMAN
				cm.changeJob(131); // DRAGONKNIGHT
				cm.gainAp(5);
				cm.sendOk("You are now a #bDragon Knight#k. May #rOdin#k be with you!");
				cm.dispose();
			} else if (cm.getJob() == 2110) { // ARAN
				cm.changeJob(2111); // ARAN
				cm.gainAp(5);
				for (var i = 0; i < skills.length; i++) {
					cm.teachSkill(skills[i], cm.getPlayer().getSkillLevel(skills[i]));
				}
				cm.sendOk("You are now a #bAran#k. May #rOdin#k be with you!");
				cm.dispose();
			}
		} else {
			cm.sendOk("Come back when you are level 70 and used SP.");
			cm.dispose();
		}
	}
}
*/
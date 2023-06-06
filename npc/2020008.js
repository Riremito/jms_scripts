// タイラス
// 戦士3次

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// 原文ママ
				var text = "私に何の用だい？\r\n";
				text += "#L" + 0 + "##b3次転職したいです。#k#l\r\n";
				text += "#L" + 1 + "##bジャクムダンジョンクエストを許可してください。#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				if (selection == 0) {
					// 原文ママ
					var text = "おほん、何の用で私を訪ねたんだい？む・・・.3次転職をし、もっと強い戦士になりたいのか。もちろん私の力で君をもう少し強くしてあげる事はできるが、その前に君がどれほど熱心に修練したのかについて検証が必要なんだ。今までもっと強くなりたいと私を訪ねてきた若者たちは多かったが、実際に自分の強さを証明できたやつはあまりいなかった。どうだい？しくはないだろうが君を試してもいいかい？";
					return cm.sendYesNo(text);
				}
				return cm.dispose();
			}
		case 2:
			{
				// 原文ママ
				var text = "よし！君が証明しなければいけないのは、 君の力と知恵、この二つだ。まず、力についての試験から説明をしてあげるよう。君に1次、2次転職をさせてくれたペリオンの #b#p1022000##kを覚えているだろう？を訪ねると彼が君に一つの任務を託するだろう。その任務を無事に完遂し、 #p1022000#から#b#z4031057##kをもらって来てくれ。";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// 原文ママ
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
				cm.sendOk("ジャクムダンジョンを探索しようとしてるのか？だが、私としては君を判断することができない。君に合う職業の長老を訪ねてみてくれ。");
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
// レナリウ
// ギルド連合

var status;
var choice;
var guildName;
var partymembers;

function start() {
	//cm.sendOk("The Guild Alliance is currently under development.");
	//cm.dispose();
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		// BB後
		var text = "こんにちは！#bレナリウ#kといいます。\r\n";
		text += "#b#L0#ギルド連合が何か教えてください。#l\r\n";
		text += "#L1#ギルド連合を結成しようとしたらどうしたらいいでしょうか？#l\r\n";
		text += "#L2#ギルド連合を結成したいです。#l\r\n";
		text += "#L3#ギルド連合のギルド数を増やしたいです。#l\r\n";
		text += "#L4#ギルド連合を解体したいです。#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		choice = selection;
		if (selection == 0) {
			cm.sendSimple("いくつかのギルド同士が集まって生み出した集まりをギルド連合といいます。私はこう結成されたギルド連合を管理する仕事を担当しています。");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendSimple("ギルド連合を作るにはギルドマスター2名がグループを組まなければなりません。ここでグループリーダーがギルド連合リーダーになります。");
			// 2名のギルドマスターが集まったら500万メルが必要です。これはギルド連合に登録するのに必要な手数料です。
			// そしてもう一つ！当然、他のギルド連合に加入されている場合は新たにギルド連合を結成することができませんよ！
			cm.dispose();
		} else if (selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				// グループ員が2名の場合のみ、ギルド連合を登録することができます。
				cm.sendSimple("グループマスターのみギルド連合を登録することができます。"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
				cm.sendOk("You cannot form a Guild Union until you own a guild");
				cm.dispose();
			} else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
				cm.sendOk("Your party member does not seem to own a guild.");
				cm.dispose();
			} else {
				var gs = cm.getGuild(cm.getPlayer().getGuildId());
				var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
				if (gs.getAllianceId() > 0) {
					cm.sendOk("You cannot form a Guild Union if you are already affiliated with a different Union.");
					cm.dispose();
				} else if (gs2.getAllianceId() > 0) {
					cm.sendOk("Your party member is already affiliated with a guild union.");
					cm.dispose();
				} else if (cm.partyMembersInMap() < 2) {
					cm.sendOk("Get your other party member on the same map please.");
					cm.dispose();
				} else
					cm.sendYesNo("Oh, are you interested in forming a Guild Union?");
			}
		} else if (selection == 3) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("To increase the capacity, you will need to pay 10,000,000 mesos. Are you sure you wish to proceed?"); //ExpandGuild Text
			} else {
				cm.sendSimple("ギルド連合長のみギルド数を増やすことができます。");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("Are you sure you want to disband your Guild Union?");
			} else {
				cm.sendSimple("ギルド連合長のみギルド連合を解体することができます。");
				cm.dispose();
			}
		}
	} else if (status == 2) {
		if (choice == 2) {
			cm.sendGetText("Now please enter the name of your new Guild Union. (max. 12 letters)");
		} else if (choice == 3) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("You cannot increase a non-existant Guild Union.");
				cm.dispose();
			} else {
				if (cm.addCapacityToAlliance()) {
					cm.sendOk("You have added capacity to your alliance.");
				} else {
					cm.sendOk("Your guild union has too much capacity already. 5 is the maximum.");
				}
				cm.dispose();
			}
		} else if (choice == 4) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("You cannot disband a non-existant Guild Union.");
				cm.dispose();
			} else {
				if (cm.disbandAlliance()) {
					cm.sendOk("Your Guild Union has been disbanded");
				} else {
					cm.sendOk("An error occured when disbanding the Guild Union");
				}
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
		cm.sendYesNo("Will #b" + guildName + "#k be the name of your Guild Union?");
	} else if (status == 4) {
		if (!cm.createAlliance(guildName)) {
			cm.sendNext("This name is unavailable, please choose another one"); //Not real text
			status = 1;
			choice = 2;
		} else
			cm.sendOk("You have successfully formed a Guild Union.");
		cm.dispose();
	}
}
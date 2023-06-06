// ���i���E
// �M���h�A��

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
		// BB��
		var text = "����ɂ��́I#b���i���E#k�Ƃ����܂��B\r\n";
		text += "#b#L0#�M���h�A�������������Ă��������B#l\r\n";
		text += "#L1#�M���h�A�����������悤�Ƃ�����ǂ������炢���ł��傤���H#l\r\n";
		text += "#L2#�M���h�A���������������ł��B#l\r\n";
		text += "#L3#�M���h�A���̃M���h���𑝂₵�����ł��B#l\r\n";
		text += "#L4#�M���h�A������̂������ł��B#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		choice = selection;
		if (selection == 0) {
			cm.sendSimple("�������̃M���h���m���W�܂��Đ��ݏo�����W�܂���M���h�A���Ƃ����܂��B���͂����������ꂽ�M���h�A�����Ǘ�����d����S�����Ă��܂��B");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendSimple("�M���h�A�������ɂ̓M���h�}�X�^�[2�����O���[�v��g�܂Ȃ���΂Ȃ�܂���B�����ŃO���[�v���[�_�[���M���h�A�����[�_�[�ɂȂ�܂��B");
			// 2���̃M���h�}�X�^�[���W�܂�����500���������K�v�ł��B����̓M���h�A���ɓo�^����̂ɕK�v�Ȏ萔���ł��B
			// �����Ă�����I���R�A���̃M���h�A���ɉ�������Ă���ꍇ�͐V���ɃM���h�A�����������邱�Ƃ��ł��܂����I
			cm.dispose();
		} else if (selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				// �O���[�v����2���̏ꍇ�̂݁A�M���h�A����o�^���邱�Ƃ��ł��܂��B
				cm.sendSimple("�O���[�v�}�X�^�[�̂݃M���h�A����o�^���邱�Ƃ��ł��܂��B"); //Not real text
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
				cm.sendSimple("�M���h�A�����̂݃M���h���𑝂₷���Ƃ��ł��܂��B");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("Are you sure you want to disband your Guild Union?");
			} else {
				cm.sendSimple("�M���h�A�����̂݃M���h�A������̂��邱�Ƃ��ł��܂��B");
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
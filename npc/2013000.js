// �O���[�v�N�G�X�g 1

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var mapid = cm.getMapId();
				var text = "���`�A��Ċ�������I���_�̓���`���������́H�O���[�v�ɐ�m�A���@�g���A�����A�|�g�����e1���ȏア��ƃE�B���L�̏j���������Ă������B\r\n";
				text += "#L" + 0 + "##b�����\�����ށB#k#l\r\n";
				text += "#L" + 1 + "##b���_�̓��ɂ��ĕ����B#k#l\r\n";
				text += "#L" + 2 + "##b�E�B���L�ɐH�ו���n���B#k#l\r\n";
				text += "#L" + 3 + "##b���_�̉H�ɂ��ĕ����B#k#l\r\n";
				text += "#L" + 777 + "##b�f�o�b�O���[�h#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// test
				if (selection == 777) {
					var em = cm.getEventManager("OrbisPQ");
					if (em == null) {
						cm.sendOk("�I���N�G ������");
					}
					else {
						cm.sendOk("�I���N�G �J�Ò�");
						var prop = em.getProperty("state");
						if (prop == null || prop.equals("0")) {
							em.startInstance(cm.getParty(), cm.getMap());
						}
					}
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

/*
var status = -1;
var minLevel = 51; // 35
var maxLevel = 200; // 65

var minPartySize = 5;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	    return;
	}
	status--;
    }
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("We have to save Chamberlain Eak! Restore the 20 Cloud Pieces!");
		cm.dispose();
		return;
	}
    if (status == 0) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it unless with great teamwork. If you want to try it, please tell the #bleader of your party#k to talk to me.\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".#b\r\n#L0#I want the Minerva Wristband.#l");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("If you want to try the quest, please tell the #bleader of your party#k to talk to me.#b\r\n#L0#I want the Minerva Wristband.#l");
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("OrbisPQ");
		if (em == null) {
		    cm.sendSimple("The PQ has encountered an error. Please report this on the forums, with a screenshot.#b\r\n#L0#I want the Minerva Wristband.#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("Another party has already entered the #rParty Quest#k in this channel. Please try another channel, or wait for the current party to finish.#b\r\n#L0#I want the Minerva Wristband.#l");
		    }
		}
	    } else {
		cm.sendSimple("Your party is invalid. Please adhere to the following requirements:\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".#b\r\n#L0#I want the Minerva Wristband.#l");
	    }
	}
    } else { //broken glass
	if (!cm.canHold(1082232,1)) {
	    cm.sendOk("Make room for this Wristband.");
	} else if (cm.haveItem(4001158,40)) {
	    cm.gainItem(1082232,1);
	    cm.gainItem(4001158,-40); 
	} else {
	    cm.sendOk("Come back when you have done 40 #t4001158#.");
	}
	cm.dispose();

    }
}
*/